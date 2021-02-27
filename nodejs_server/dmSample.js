//
// Copyright (c) 2019 Autodesk, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//

/*jshint esversion: 9 */

var fs = require('fs');

var ForgeSDK = require('./src/index');

// TODO - insert your CLIENT_ID and CLIENT_SECRET
var FORGE_CLIENT_ID = process.env.FORGE_CLIENT_ID || 'oX5FsPDBc01ezMNQbkrXz2gZdHBiaAYH';
var FORGE_CLIENT_SECRET = process.env.FORGE_CLIENT_SECRET || 'ypuJtTC6nk7di6Py';

// TODO - Choose a bucket key - a unique name to assign to a bucket. It must be globally unique across all applications and
// regions, otherwise the call will fail. Possible values: -_.a-z0-9 (between 3-128 characters in
// length). Note that you cannot change a bucket key.
var BUCKET_KEY = 'forge_' + FORGE_CLIENT_ID.toLowerCase();

// TODO - Choose a filename - a key for the uploaded object
var FILE_NAME = 'ASCW_Integration.rvt';

// TODO - specify the full filename and path
var FILE_PATH = './assets/ASCW_Integration.rvt';

var bucketsApi = new ForgeSDK.BucketsApi(), // Buckets Client
	objectsApi = new ForgeSDK.ObjectsApi(); // Objects Client
	derivativesApi = new ForgeSDK.DerivativesApi(); // Derivatives Client

// Initialize the 2-legged oauth2 client
var oAuth2TwoLegged = new ForgeSDK.AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET,
	['data:write', 'data:read', 'bucket:read', 'bucket:update', 'bucket:create'], true);

/**
 * General error handling method
 * @param err
 */
function defaultHandleError(err) {
	console.error('\x1b[31m Error:', err, '\x1b[0m');
}

/**
 * Gets the details of a bucket specified by a bucketKey.
 * Uses the oAuth2TwoLegged object that you retrieved previously.
 * @param bucketKey
 */
var getBucketDetails = function (bucketKey) {
	console.log("**** Getting bucket details : " + bucketKey);
	return bucketsApi.getBucketDetails(bucketKey, oAuth2TwoLegged, oAuth2TwoLegged.getCredentials());
};

function base64encode(str) {
  return new Buffer(str).toString('base64');
}

var translateFile = function(encodedURN){
  console.log("**** Translating file derivative");
  var postJob =
  {
    input: {
      urn: encodedURN
    },
    output: {
      formats: [
        {
          type: "svf",
          views: ["2d", "3d"]
        }
      ]
    }
  };

  return new Promise(function(resolve, reject) {
    derivativesApi.translate(postJob, {}, oAuth2TwoLegged, oAuth2TwoLegged.getCredentials()).then(
      function(res){
        resolve(res);
      },function(err){
        reject(err);
      }
    )
  });
};

var manifestFile = function (encodedURN) {
	console.log("**** Getting File Manifest Status");

	return new Promise(function(resolve, reject) {
		derivativesApi.getManifest(encodedURN, {}, oAuth2TwoLegged, oAuth2TwoLegged.getCredentials()).then(
			function(res){
				if (res.body.progress != "complete"){
					console.log("The status of your file is " + res.body.status);
					console.log(" Please wait while we finish Translating your file");
				}else{
					console.log("****" + res.body.status);
					console.log("****" + res.body.progress);
					resolve(res);
				}
			},function(err){
				reject(err);
			}
		)
	});
}

/**
 * Create a new bucket.
 * Uses the oAuth2TwoLegged object that you retrieved previously.
 * @param bucketKey
 */
var createBucket = function (bucketKey) {
	console.log("**** Creating Bucket : " + bucketKey);
	var createBucketJson = {
		'bucketKey': bucketKey,
		'policyKey': 'temporary'
	};
	return bucketsApi.createBucket(createBucketJson, {}, oAuth2TwoLegged, oAuth2TwoLegged.getCredentials());
};

/**
 * This function first makes an API call to getBucketDetails endpoint with the provided bucketKey.
 * If the bucket doesn't exist - it makes another call to createBucket endpoint.
 * @param bucketKey
 * @returns {Promise - details of the bucket in Forge}
 */
var createBucketIfNotExist = function (bucketKey) {
	console.log("**** Creating bucket if not exist :", bucketKey);

	return new Promise(function (resolve, reject) {
		getBucketDetails(bucketKey).then(function (resp) {
				resolve(resp);
			},
			function (err) {
				if (err.statusCode === 404) {
					createBucket(bucketKey).then(function (res) {
							resolve(res);
						},
						function (err) {
							reject(err);
						})
				} else {
					reject(err);
				}
			});
	});
};

/**
 * Upload a File to previously created bucket.
 * Uses the oAuth2TwoLegged object that you retrieved previously.
 * @param bucketKey
 * @param filePath
 * @param fileName
 * @returns {Promise}
 */
var uploadFile = function (bucketKey, filePath, fileName) {
	console.log("**** Uploading file. bucket:" + bucketKey + " filePath:" + filePath);
	return new Promise(function (resolve, reject) {
		fs.readFile(filePath, function (err, data) {
			if (err) {
				reject(err);
			} else {
				objectsApi.uploadObject(bucketKey, fileName, data.length, data, {}, oAuth2TwoLegged, oAuth2TwoLegged.getCredentials()).then(
					function (res) {
						resolve(res);
					},
					function (err) {
						reject(err);
					}
				)
			}
		});
	});
};

/**
 * Delete the file uploaded by the application.
 * Uses the oAuth2TwoLegged object that you retrieved previously.
 * @param bucketKey
 * @param fileName
 */
var deleteFile = function (bucketKey, fileName) {
	console.log("**** Deleting file from bucket:" + bucketKey + ", filename:" + fileName);
	return objectsApi.deleteObject(bucketKey, fileName, oAuth2TwoLegged, oAuth2TwoLegged.getCredentials());
};

/**
 * Get the buckets owned by an application.
 * Uses the oAuth2TwoLegged object that you retrieved previously.
 */
var getBuckets = function () {
	console.log("**** Getting all buckets");
	return bucketsApi.getBuckets({}, oAuth2TwoLegged, oAuth2TwoLegged.getCredentials());
};

/**
 * Create an access token and run the API calls.
 */
const forgeFunction = function () {
	return new Promise(function(resolve) {
		let urnForViewer,accessToken;

		oAuth2TwoLegged.authenticate().then(function (credentials) {

			console.log("**** Got Credentials", credentials);
			accessToken = credentials.access_token;

			createBucketIfNotExist(BUCKET_KEY).then(

				function (createBucketRes) {

					console.log("**** Create bucket if not exist response:", createBucketRes.body);

					getBuckets().then(function (getBucketsRes) {
						console.log("**** Get all buckets response:");
						var bucketsArray = getBucketsRes.body.items;
						bucketsArray.map(function (currentBucket) {
							console.log(currentBucket.bucketKey);
						})
					}, function (err) {
						console.error(err);
					});

					uploadFile(BUCKET_KEY, FILE_PATH, FILE_NAME).then(function (uploadRes) {
						console.log("**** Upload file response:", uploadRes.body);

						var objectId = uploadRes.body.objectId;
						console.log("objectId:", objectId);
						var urn = base64encode(objectId);
						console.log("urn:", urn);
						urnForViewer = urn;



						translateFile(urn).then(function(translateRes){

							manifestFile(urn).then(function(){
								console.log("**** Your File is ready for viewing");
								resolve({urn: urnForViewer, access_token: accessToken});
							}, defaultHandleError)

						}, defaultHandleError);
					}, defaultHandleError);

				}, defaultHandleError);

		}, defaultHandleError);

	})
}

module.exports = forgeFunction().then((data) => {
	return data;
});
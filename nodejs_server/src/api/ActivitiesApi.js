/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. Take advantage of Autodesk’s expertise in design and engineering.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: forge.help@autodesk.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = (function () {
	'use strict';

	var ApiClient = require('../ApiClient'),
		Activity = require('../model/Activity'),
		ActivityOptional = require('../model/ActivityOptional'),
		ActivityVersion = require('../model/ActivityVersion'),
		DesignAutomationActivities = require('../model/DesignAutomationActivities');

	/**
	 * Activities service.
	 * @module api/ActivitiesApi
	 * @deprecated
	 */

	/**
	 * Constructs a new ActivitiesApi.
	 * @alias module:api/ActivitiesApi
	 * @class
	 * @param {module:ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:ApiClient#instance} if unspecified.
	 * @deprecated
	 */
	var exports = function (apiClient) {
		this.apiClient = apiClient || ApiClient.instance;

		if ( !this.__proto__ || !this.__proto__.constructor || this.__proto__.constructor.disable_dav2_deprecated_Warning !== true)
			console.warn("WARNING: The 'Forge Design Automation v2' API is deprecated in favor of the 'Forge Design Automation v3' API npm package (aka: npm install autodesk.forge.designautomation), please upgrade.\n");

		/**
		 * Creates a new Activity.
		 * @param {module:model/Activity} activity
		 * data is of type: {module:model/Activity}
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 * @deprecated
		 */
		this.createActivity = function (activity, oauth2client, credentials) {
			var postBody = activity;

			// verify the required parameter 'activity' is set
			if (activity == undefined || activity == null) {
				return Promise.reject("Missing the required parameter 'activity' when calling createActivity");
			}

			var pathParams = {};
			var queryParams = {};
			var headerParams = {};
			var formParams = {};

			var contentTypes = ['application/json'];
			var accepts = ['application/vnd.api+json', 'application/json'];
			var returnType = Activity;

			return this.apiClient.callApi(
				'/autocad.io/us-east/v2/Activities', 'POST',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};

		/**
		 * Removes a specific Activity.
		 * @param {String} id
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 * @deprecated
		 */
		this.deleteActivity = function (id, oauth2client, credentials) {
			var postBody = null;

			// verify the required parameter 'id' is set
			if (id == undefined || id == null) {
				return Promise.reject("Missing the required parameter 'id' when calling deleteActivity");
			}

			var pathParams = {
				'id': id
			};
			var queryParams = {};
			var headerParams = {};
			var formParams = {};

			var contentTypes = ['application/json'];
			var accepts = ['application/vnd.api+json', 'application/json'];
			var returnType = null;

			return this.apiClient.callApi(
				'/autocad.io/us-east/v2/Activities(%27{id}%27)', 'DELETE',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};

		/**
		 * Removes the version history of the specified Activity.
		 * @param {String} id
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 * @deprecated
		 */
		this.deleteActivityHistory = function (id, oauth2client, credentials) {
			var postBody = null;

			// verify the required parameter 'id' is set
			if (id == undefined || id == null) {
				return Promise.reject("Missing the required parameter 'id' when calling deleteActivityHistory");
			}

			var pathParams = {
				'id': id
			};
			var queryParams = {};
			var headerParams = {};
			var formParams = {};

			var contentTypes = ['application/json'];
			var accepts = ['application/vnd.api+json', 'application/json'];
			var returnType = null;

			return this.apiClient.callApi(
				'/autocad.io/us-east/v2/Activities(%27{id}%27)/Operations.DeleteHistory', 'POST',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};

		/**
		 * Returns the details of a specific Activity.
		 * @param {String} id
		 * data is of type: {module:model/Activity}
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 * @deprecated
		 */
		this.getActivity = function (id, oauth2client, credentials) {
			var postBody = null;

			// verify the required parameter 'id' is set
			if (id == undefined || id == null) {
				return Promise.reject("Missing the required parameter 'id' when calling getActivity");
			}

			var pathParams = {
				'id': id
			};
			var queryParams = {};
			var headerParams = {};
			var formParams = {};

			var contentTypes = ['application/json'];
			var accepts = ['application/vnd.api+json', 'application/json'];
			var returnType = Activity;

			return this.apiClient.callApi(
				'/autocad.io/us-east/v2/Activities(%27{id}%27)', 'GET',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};

		/**
		 * Returns all old versions of a specified Activity.
		 * @param {String} id
		 * data is of type: {module:model/DesignAutomationActivities}
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 * @deprecated
		 */
		this.getActivityVersions = function (id, oauth2client, credentials) {
			var postBody = null;

			// verify the required parameter 'id' is set
			if (id == undefined || id == null) {
				return Promise.reject("Missing the required parameter 'id' when calling getActivityVersions");
			}

			var pathParams = {
				'id': id
			};
			var queryParams = {};
			var headerParams = {};
			var formParams = {};

			var contentTypes = ['application/json'];
			var accepts = ['application/vnd.api+json', 'application/json'];
			var returnType = DesignAutomationActivities;

			return this.apiClient.callApi(
				'/autocad.io/us-east/v2/Activities(%27{id}%27)/Operations.GetVersions', 'GET',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};

		/**
		 * Returns the details of all Activities.
		 * data is of type: {module:model/DesignAutomationActivities}
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 * @deprecated
		 */
		this.getAllActivities = function (oauth2client, credentials) {
			var postBody = null;

			var pathParams = {};
			var queryParams = {};
			var headerParams = {};
			var formParams = {};

			var contentTypes = ['application/json'];
			var accepts = ['application/vnd.api+json', 'application/json'];
			var returnType = DesignAutomationActivities;

			return this.apiClient.callApi(
				'/autocad.io/us-east/v2/Activities', 'GET',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};

		/**
		 * Updates an Activity by specifying only the changed attributes.
		 * @param {String} id
		 * @param {module:model/ActivityOptional} activity
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 * @deprecated
		 */
		this.patchActivity = function (id, activity, oauth2client, credentials) {
			var postBody = activity;

			// verify the required parameter 'id' is set
			if (id == undefined || id == null) {
				return Promise.reject("Missing the required parameter 'id' when calling patchActivity");
			}

			// verify the required parameter 'activity' is set
			if (activity == undefined || activity == null) {
				return Promise.reject("Missing the required parameter 'activity' when calling patchActivity");
			}

			var pathParams = {
				'id': id
			};
			var queryParams = {};
			var headerParams = {};
			var formParams = {};

			var contentTypes = ['application/json'];
			var accepts = ['application/vnd.api+json', 'application/json'];
			var returnType = null;

			return this.apiClient.callApi(
				'/autocad.io/us-east/v2/Activities(%27{id}%27)', 'PATCH',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};

		/**
		 * Sets the Activity to the specified version.
		 * @param {String} id
		 * @param {module:model/ActivityVersion} activityVersion
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 * @deprecated
		 */
		this.setActivityVersion = function (id, activityVersion, oauth2client, credentials) {
			var postBody = activityVersion;

			// verify the required parameter 'id' is set
			if (id == undefined || id == null) {
				return Promise.reject("Missing the required parameter 'id' when calling setActivityVersion");
			}

			// verify the required parameter 'activityVersion' is set
			if (activityVersion == undefined || activityVersion == null) {
				return Promise.reject("Missing the required parameter 'activityVersion' when calling setActivityVersion");
			}

			var pathParams = {
				'id': id
			};
			var queryParams = {};
			var headerParams = {};
			var formParams = {};

			var contentTypes = ['application/json'];
			var accepts = ['application/vnd.api+json', 'application/json'];
			var returnType = null;

			return this.apiClient.callApi(
				'/autocad.io/us-east/v2/Activities(%27{id}%27)/Operations.SetVersion', 'POST',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};
	};

	return exports;
}());
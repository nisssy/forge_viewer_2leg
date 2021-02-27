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
		BadInput = require('../model/BadInput'),
		Conflict = require('../model/Conflict'),
		CreateRef = require('../model/CreateRef'),
		Folder = require('../model/Folder'),
		Forbidden = require('../model/Forbidden'),
		JsonApiCollection = require('../model/JsonApiCollection'),
		NotFound = require('../model/NotFound'),
		Refs = require('../model/Refs');

	/**
	 * Folders service.
	 * @module api/FoldersApi
	 */

	/**
	 * Constructs a new FoldersApi.
	 * @alias module:api/FoldersApi
	 * @class
	 * @param {module:ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:ApiClient#instance} if unspecified.
	 */
	var exports = function (apiClient) {
		this.apiClient = apiClient || ApiClient.instance;

		/**
		 * Returns the folder by ID for any folder within a given project. All folders or sub-folders within a project are associated with their own unique ID, including the root folder.
		 * @param {String} projectId the project id
		 * @param {String} folderId the folder id
		 * data is of type: {module:model/Folder}
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.getFolder = function (projectId, folderId, oauth2client, credentials) {
			return this.getFolder2(projectId, folderId, {}, oauth2client, credentials);
		};

		/**
		 * Returns the folder by ID for any folder within a given project. All folders or sub-folders within a project are associated with their own unique ID, including the root folder.
		 * @param {String} projectId the project id
		 * @param {String} folderId the folder id
		 * @param {Object} opts Optional parameters
		 * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
		 * @param {String} opts.ifModifiedSince If the requested object has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message body.
		 * data is of type: {module:model/Folder}
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.getFolder2 = function (projectId, folderId, opts, oauth2client, credentials) {
			opts = opts || {};
			var postBody = null;

			// verify the required parameter 'projectId' is set
			if (projectId == undefined || projectId == null) {
				return Promise.reject("Missing the required parameter 'projectId' when calling getFolder");
			}

			// verify the required parameter 'folderId' is set
			if (folderId == undefined || folderId == null) {
				return Promise.reject("Missing the required parameter 'folderId' when calling getFolder");
			}

			var pathParams = {
				'project_id': projectId,
				'folder_id': folderId
			};
			var queryParams = {};
			var headerParams = {
				'x-user-id': opts.xuserid,
				'If-Modified-Since': opts.ifModifiedSince
			};
			var formParams = {};

			var contentTypes = ['application/vnd.api+json'];
			var accepts = ['application/vnd.api+json', 'application/json'];
			var returnType = Folder;

			return this.apiClient.callApi(
				'/data/v1/projects/{project_id}/folders/{folder_id}', 'GET',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};

		/**
		 * Returns a collection of items and folders within a folder. Items represent word documents, fusion design files, drawings, spreadsheets, etc.
		 * @param {String} projectId the project id
		 * @param {String} folderId the folder id
		 * @param {Object} opts Optional parameters
		 * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
		 * @param {Array.<String>} opts.filterType filter by the `type` of the `ref` target
		 * @param {Array.<String>} opts.filterId filter by the `id` of the `ref` target
		 * @param {Array.<String>} opts.filterExtensionType filter by the extension type
		 * @param {Integer} opts.pageNumber specify the page number
		 * @param {Integer} opts.pageLimit specify the maximal number of elements per page
		 * @param {Boolean} opts.includeHidden Refers to items and folders that were deleted from BIM 360 Docs projects.
		 * @param {Array.<*>} opts['filter[*]<-modifier>'] generic filter / <-modifier> is optional
		 * data is of type: {module:model/JsonApiCollection}
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.getFolderContents = function (projectId, folderId, opts, oauth2client, credentials) {
			opts = opts || {};
			var postBody = null;

			// verify the required parameter 'projectId' is set
			if (projectId == undefined || projectId == null) {
				return Promise.reject("Missing the required parameter 'projectId' when calling getFolderContents");
			}

			// verify the required parameter 'folderId' is set
			if (folderId == undefined || folderId == null) {
				return Promise.reject("Missing the required parameter 'folderId' when calling getFolderContents");
			}

			var pathParams = {
				'project_id': projectId,
				'folder_id': folderId
			};
			var queryParams = {
				'filter[type]': this.apiClient.buildCollectionParam(opts.filterType, 'csv'),
				'filter[id]': this.apiClient.buildCollectionParam(opts.filterId, 'csv'),
				'filter[extension.type]': this.apiClient.buildCollectionParam(opts.filterExtensionType, 'csv'),
				'page[number]': opts.pageNumber,
				'page[limit]': opts.pageLimit,
				'includeHidden': opts.includeHidden
			};
			var keys = Object.keys(opts).filter(function (elt) {
				return (new RegExp(/^filter\[/).test(elt));
			});
			var that = this;
			keys.map(function (elt) {
				queryParams[elt] = that.apiClient.buildCollectionParam(opts[elt], 'csv');
				return (elt);
			});

			var headerParams = {
				'x-user-id': opts.xuserid
			};
			var formParams = {};

			var contentTypes = ['application/vnd.api+json'];
			var accepts = ['application/vnd.api+json', 'application/json'];
			var returnType = JsonApiCollection;

			return this.apiClient.callApi(
				'/data/v1/projects/{project_id}/folders/{folder_id}/contents', 'GET',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};

		/**
		 * Returns the parent folder (if it exists). In a project, subfolders and resource items are stored under a folder except the root folder which does not have a parent of its own.
		 * @param {String} projectId the project id
		 * @param {String} folderId the folder id
		 * data is of type: {module:model/Folder}
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.getFolderParent = function (projectId, folderId, oauth2client, credentials) {
			return(this.getFolderParent2(projectId, folderId, {}, oauth2client, credentials));
		};

		/**
		 * Returns the parent folder (if it exists). In a project, subfolders and resource items are stored under a folder except the root folder which does not have a parent of its own.
		 * @param {String} projectId the project id
		 * @param {String} folderId the folder id
		 * @param {Object} opts Optional parameters
		 * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
		 * data is of type: {module:model/Folder}
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.getFolderParent2 = function (projectId, folderId, opts, oauth2client, credentials) {
			opts = opts || {};
			var postBody = null;

			// verify the required parameter 'projectId' is set
			if (projectId == undefined || projectId == null) {
				return Promise.reject("Missing the required parameter 'projectId' when calling getFolderParent");
			}

			// verify the required parameter 'folderId' is set
			if (folderId == undefined || folderId == null) {
				return Promise.reject("Missing the required parameter 'folderId' when calling getFolderParent");
			}

			var pathParams = {
				'project_id': projectId,
				'folder_id': folderId
			};
			var queryParams = {};
			var headerParams = {
				'x-user-id': opts.xuserid
			};
			var formParams = {};

			var contentTypes = ['application/vnd.api+json'];
			var accepts = ['application/vnd.api+json', 'application/json'];
			var returnType = Folder;

			return this.apiClient.callApi(
				'/data/v1/projects/{project_id}/folders/{folder_id}/parent', 'GET',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};

		/**
		 * Returns the resources (items, folders, and versions) which have a custom relationship with the given folder_id. Custom relationships can be established between a folder and other resources within the &#39;data&#39; domain service (folders, items, and versions).
		 * @param {String} projectId the project id
		 * @param {String} folderId the folder id
		 * @param {Object} opts Optional parameters
		 * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
		 * @param {Array.<String>} opts.filterType filter by the `type` of the `ref` target
		 * @param {Array.<String>} opts.filterId filter by the `id` of the `ref` target
		 * @param {Array.<String>} opts.filterExtensionType filter by the extension type
		 * @param {Array.<*>} opts['filter[*]<-modifier>'] generic filter / <-modifier> is optional
		 * data is of type: {module:model/JsonApiCollection}
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.getFolderRefs = function (projectId, folderId, opts, oauth2client, credentials) {
			opts = opts || {};
			var postBody = null;

			// verify the required parameter 'projectId' is set
			if (projectId == undefined || projectId == null) {
				return Promise.reject("Missing the required parameter 'projectId' when calling getFolderRefs");
			}

			// verify the required parameter 'folderId' is set
			if (folderId == undefined || folderId == null) {
				return Promise.reject("Missing the required parameter 'folderId' when calling getFolderRefs");
			}

			var pathParams = {
				'project_id': projectId,
				'folder_id': folderId
			};
			var queryParams = {
				'filter[type]': this.apiClient.buildCollectionParam(opts.filterType, 'csv'),
				'filter[id]': this.apiClient.buildCollectionParam(opts.filterId, 'csv'),
				'filter[extension.type]': this.apiClient.buildCollectionParam(opts.filterExtensionType, 'csv')
			};
			var keys = Object.keys(opts).filter(function (elt) {
				return (new RegExp(/^filter\[/).test(elt));
			});
			var that = this;
			keys.map(function (elt) {
				queryParams[elt] = that.apiClient.buildCollectionParam(opts[elt], 'csv');
				return (elt);
			});

			var headerParams = {
				'x-user-id': opts.xuserid
			};
			var formParams = {};

			var contentTypes = ['application/vnd.api+json'];
			var accepts = ['application/vnd.api+json', 'application/json'];
			var returnType = JsonApiCollection;

			return this.apiClient.callApi(
				'/data/v1/projects/{project_id}/folders/{folder_id}/refs', 'GET',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};

		/**
		 * Returns a collection of links for the given folder_id. Custom relationships can be established between a folder and other external resources residing outside the data domain service. A link’s href defines the target URI to access a resource.
		 * @param {String} projectId the project id
		 * @param {String} folderId the folder id
		 * @param {Object} opts Optional parameters
		 * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
		 * @param {Array.<String>} opts.filterType filter by the `type` of the `ref` target
		 * @param {Array.<String>} opts.filterId filter by the `id` of the `ref` target
		 * @param {Array.<String>} opts.filterExtensionType filter by the extension type
		 * @param {Array.<String>} opts.filterMimeType Filter by mime type.
		 * @param {Array.<*>} opts['filter[*]<-modifier>'] generic filter / <-modifier> is optional
		 * data is of type: {module:model/JsonApiCollection}
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.getFolderRelationshipsLinks = function (projectId, folderId, opts, oauth2client, credentials) {
			opts = opts || {};
			var postBody = null;

			// verify the required parameter 'projectId' is set
			if (projectId == undefined || projectId == null) {
				return Promise.reject("Missing the required parameter 'projectId' when calling getFolderRefs");
			}

			// verify the required parameter 'folderId' is set
			if (folderId == undefined || folderId == null) {
				return Promise.reject("Missing the required parameter 'folderId' when calling getFolderRefs");
			}

			var pathParams = {
				'project_id': projectId,
				'folder_id': folderId
			};
			var queryParams = {
				'filter[type]': this.apiClient.buildCollectionParam(opts.filterType, 'csv'),
				'filter[id]': this.apiClient.buildCollectionParam(opts.filterId, 'csv'),
				'filter[extension.type]': this.apiClient.buildCollectionParam(opts.filterExtensionType, 'csv'),
				'filter[mimeType]': this.apiClient.buildCollectionParam(opts.filterMimeType, 'csv')
			};
			var keys = Object.keys(opts).filter(function (elt) {
				return (new RegExp(/^filter\[/).test(elt));
			});
			var that = this;
			keys.map(function (elt) {
				queryParams[elt] = that.apiClient.buildCollectionParam(opts[elt], 'csv');
				return (elt);
			});

			var headerParams = {
				'x-user-id': opts.xuserid
			};
			var formParams = {};

			var contentTypes = ['application/vnd.api+json'];
			var accepts = ['application/vnd.api+json', 'application/json'];
			var returnType = JsonApiCollection;

			return this.apiClient.callApi(
				'/data/v1/projects/{project_id}/folders/{folder_id}/relationships/links', 'GET',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};

		/**
		 * Returns the custom relationships that are associated to the given folder_id. Custom relationships can be established between a folder and other resources within the &#39;data&#39; domain service (folders, items, and versions).
		 * @param {String} projectId the project id
		 * @param {String} folderId the folder id
		 * @param {Object} opts Optional parameters
		 * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
		 * @param {Array.<String>} opts.filterType filter by the `type` of the `ref` target
		 * @param {Array.<String>} opts.filterId filter by the `id` of the `ref` target
		 * @param {Array.<String>} opts.filterRefType filter by `refType`
		 * @param {module:model/String} opts.filterDirection filter by the direction of the reference
		 * @param {Array.<String>} opts.filterExtensionType filter by the extension type
		 * @param {Array.<*>} opts['filter[*]<-modifier>'] generic filter / <-modifier> is optional
		 * data is of type: {module:model/Refs}
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.getFolderRelationshipsRefs = function (projectId, folderId, opts, oauth2client, credentials) {
			opts = opts || {};
			var postBody = null;

			// verify the required parameter 'projectId' is set
			if (projectId == undefined || projectId == null) {
				return Promise.reject("Missing the required parameter 'projectId' when calling getFolderRelationshipsRefs");
			}

			// verify the required parameter 'folderId' is set
			if (folderId == undefined || folderId == null) {
				return Promise.reject("Missing the required parameter 'folderId' when calling getFolderRelationshipsRefs");
			}

			var pathParams = {
				'project_id': projectId,
				'folder_id': folderId
			};
			var queryParams = {
				'filter[type]': this.apiClient.buildCollectionParam(opts.filterType, 'csv'),
				'filter[id]': this.apiClient.buildCollectionParam(opts.filterId, 'csv'),
				'filter[refType]': this.apiClient.buildCollectionParam(opts.filterRefType, 'csv'),
				'filter[direction]': opts.filterDirection,
				'filter[extension.type]': this.apiClient.buildCollectionParam(opts.filterExtensionType, 'csv')
			};
			var keys = Object.keys(opts).filter(function (elt) {
				return (new RegExp(/^filter\[/).test(elt));
			});
			var that = this;
			keys.map(function (elt) {
				queryParams[elt] = that.apiClient.buildCollectionParam(opts[elt], 'csv');
				return (elt);
			});

			var headerParams = {
				'x-user-id': opts.xuserid
			};
			var formParams = {};

			var contentTypes = ['application/vnd.api+json'];
			var accepts = ['application/vnd.api+json', 'application/json'];
			var returnType = Refs;

			return this.apiClient.callApi(
				'/data/v1/projects/{project_id}/folders/{folder_id}/relationships/refs', 'GET',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};

		/**
		 * Filters the data of a folder and recursively in the subfolders of any project accessible to you.
		 * @param {String} projectId the project id
		 * @param {String} folderId the folder id
		 * @param {Object} opts Optional parameters
		 * @param {Array.<*>} opts['filter[*]<-modifier>'] generic filter / <-modifier> is optional
		 * @param {Integer} opts.pageNumber specify the page number
		 * data is of type: {module:model/Refs}
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.search = function (projectId, folderId, opts, oauth2client, credentials) {
			opts = opts || {};
			var postBody = null;

			// verify the required parameter 'projectId' is set
			if (projectId == undefined || projectId == null) {
				return Promise.reject("Missing the required parameter 'projectId' when calling getFolderRelationshipsRefs");
			}

			// verify the required parameter 'folderId' is set
			if (folderId == undefined || folderId == null) {
				return Promise.reject("Missing the required parameter 'folderId' when calling getFolderRelationshipsRefs");
			}

			var pathParams = {
				'project_id': projectId,
				'folder_id': folderId
			};
			var queryParams = {
				'page[number]': opts.pageNumber,
				'page[limit]': opts.pageLimit
			};
			var keys = Object.keys(opts).filter(function (elt) {
				return (new RegExp(/^filter\[/).test(elt));
			});
			var that = this;
			keys.map(function (elt) {
				queryParams[elt] = that.apiClient.buildCollectionParam(opts[elt], 'csv');
				return (elt);
			});

			var headerParams = {
				//'x-user-id': opts.xuserid
			};
			var formParams = {};

			var contentTypes = ['application/vnd.api+json'];
			var accepts = ['application/vnd.api+json', 'application/json'];
			var returnType = null;

			return this.apiClient.callApi(
				'/data/v1/projects/{project_id}/folders/{folder_id}/search', 'GET',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};

		/**
		 * Creates a new folder in the data domain service
		 * @param {String} projectId the project id
		 * @param {module:model/CreateFolder} body describe the folder to be created
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.postFolder = function (projectId, body, oauth2client, credentials) {
			return this.postFolder2(projectId, body, {}, oauth2client, credentials);
		};

		/**
		 * Creates a new folder in the data domain service
		 * @param {String} projectId the project id
		 * @param {Object} opts Optional parameters
		 * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
		 * @param {module:model/CreateFolder} body describe the folder to be created
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.postFolder2 = function (projectId, body, opts, oauth2client, credentials) {
			opts = opts || {};
			var postBody = body;

			// verify the required parameter 'folderId' is set
			if (projectId == undefined || projectId == null) {
				return Promise.reject("Missing the required parameter 'projectId' when calling postFolder");
			}

			// verify the required parameter 'body' is set
			if (body == undefined || body == null) {
				return Promise.reject("Missing the required parameter 'body' when calling postFolder");
			}

			var pathParams = {
				'project_id': projectId
			};
			var queryParams = {};
			var headerParams = {
				'x-user-id': opts.xuserid
			};
			var formParams = {};

			var contentTypes = ['application/vnd.api+json'];
			var accepts = ['application/vnd.api+json', 'application/json'];
			var returnType = null;

			return this.apiClient.callApi(
				'/data/v1/projects/{project_id}/folders', 'POST',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};

		/**
		 * Creates a custom relationship between a folder and another resource within the &#39;data&#39; domain service (folder, item, or version).
		 * @param {String} projectId the project id
		 * @param {String} folderId the folder id
		 * @param {module:model/CreateRef} body describe the ref to be created
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.postFolderRelationshipsRef = function (projectId, folderId, body, oauth2client, credentials) {
			return this.postFolderRelationshipsRef2(projectId, folderId, body, {}, oauth2client, credentials);
		};

		/**
		 * Creates a custom relationship between a folder and another resource within the &#39;data&#39; domain service (folder, item, or version).
		 * @param {String} projectId the project id
		 * @param {String} folderId the folder id
		 * @param {Object} opts Optional parameters
		 * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
		 * @param {module:model/CreateRef} body describe the ref to be created
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.postFolderRelationshipsRef2 = function (projectId, folderId, body, opts, oauth2client, credentials) {
			opts = opts || {};
			var postBody = body;

			// verify the required parameter 'projectId' is set
			if (projectId == undefined || projectId == null) {
				return Promise.reject("Missing the required parameter 'projectId' when calling postFolderRelationshipsRef");
			}

			// verify the required parameter 'folderId' is set
			if (folderId == undefined || folderId == null) {
				return Promise.reject("Missing the required parameter 'folderId' when calling postFolderRelationshipsRef");
			}

			// verify the required parameter 'body' is set
			if (body == undefined || body == null) {
				return Promise.reject("Missing the required parameter 'body' when calling postFolderRelationshipsRef");
			}

			var pathParams = {
				'project_id': projectId,
				'folder_id': folderId
			};
			var queryParams = {};
			var headerParams = {
				'x-user-id': opts.xuserid
			};
			var formParams = {};

			var contentTypes = ['application/vnd.api+json'];
			var accepts = ['application/vnd.api+json', 'application/json'];
			var returnType = null;

			return this.apiClient.callApi(
				'/data/v1/projects/{project_id}/folders/{folder_id}/relationships/refs', 'POST',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};

		/**
		 * Modifies folder names. You can also use this endpoint to delete and restore BIM 360 Docs folders by using the hidden attribute.
		 * @param {String} projectId the project id
		 * @param {String} folderId the folder id
		 * @param {Object} opts Optional parameters
		 * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
		 * @param {Object} body describe the ref to be created
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.patchFolder = function (projectId, folderId, body, opts, oauth2client, credentials) {
			opts = opts || {};
			var postBody = body;

			// verify the required parameter 'projectId' is set
			if (projectId == undefined || projectId == null) {
				return Promise.reject("Missing the required parameter 'projectId' when calling patchFolder");
			}

			// verify the required parameter 'folderId' is set
			if (folderId == undefined || folderId == null) {
				return Promise.reject("Missing the required parameter 'folderId' when calling patchFolder");
			}

			// verify the required parameter 'body' is set
			if (body == undefined || body == null) {
				return Promise.reject("Missing the required parameter 'body' when calling patchFolder");
			}

			var pathParams = {
				'project_id': projectId,
				'folder_id': folderId
			};
			var queryParams = {};
			var headerParams = {
				'x-user-id': opts.xuserid
			};
			var formParams = {};

			var contentTypes = ['application/vnd.api+json'];
			var accepts = ['application/vnd.api+json', 'application/json'];
			var returnType = null;

			return this.apiClient.callApi(
				'/data/v1/projects/{project_id}/folders/{folder_id}', 'PATCH',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};

	};

	return exports;
}());
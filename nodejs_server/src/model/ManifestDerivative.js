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

module.exports = (function() {
  'use strict';

  var ApiClient = require('../ApiClient'),
      ManifestChildren = require('./ManifestChildren');



  /**
   * The ManifestDerivative model module.
   * @module model/ManifestDerivative
   */

   /**
    * Constructs a <code>ManifestDerivative</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ManifestDerivative} obj Optional instance to populate.
    * @return {module:model/ManifestDerivative} The populated <code>ManifestDerivative</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
      if (data.hasOwnProperty('name')) {
        obj.name = ApiClient.convertToType(data.name, 'String');
      }
      if (data.hasOwnProperty('hasThumbnail')) {
        obj.hasThumbnail = ApiClient.convertToType(data.hasThumbnail, 'Boolean');
      }
      if (data.hasOwnProperty('outputType')) {
        obj.outputType = ApiClient.convertToType(data.outputType, 'String');
      }
      if (data.hasOwnProperty('progress')) {
        obj.progress = ApiClient.convertToType(data.progress, 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj.status = ApiClient.convertToType(data.status, 'String');
      }
      if (data.hasOwnProperty('children')) {
        obj.children = ApiClient.convertToType(data.children, [ManifestChildren]);
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>ManifestDerivative</code>.
   * Requested output files for the source file URN
   * @alias module:model/ManifestDerivative
   * @class
   * @param name {String} Output file type
   * @param hasThumbnail {Boolean} Indicates if a thumbnail has been generated
   * @param progress {String} Translation progress for requested entity
   * @param status {module:model/ManifestDerivative.StatusEnum} Status of the requested entity; possible values are: `pending`, `success`, `inprogress`, `failed`, `timeout` and `partialsuccess` 
   * @param children {Array.<module:model/ManifestChildren>} 
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/ManifestDerivative} obj Optional instance to populate.
   */
  var exports = function(name, hasThumbnail, progress, status, children, theData, obj) {
    var _this = this;

    _this.name = name;
    _this.hasThumbnail = hasThumbnail;

    _this.progress = progress;
    _this.status = status;
    _this.children = children;

    return constructFromObject(theData, obj || _this);
  };

  /**
   * Constructs a <code>ManifestDerivative</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ManifestDerivative} obj Optional instance to populate.
   * @return {module:model/ManifestDerivative} The populated <code>ManifestDerivative</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * Output file type
   * @member {String} name
   */
  exports.prototype.name = undefined;
  /**
   * Indicates if a thumbnail has been generated
   * @member {Boolean} hasThumbnail
   */
  exports.prototype.hasThumbnail = undefined;
  /**
   * @member {module:model/ManifestDerivative.OutputTypeEnum} outputType
   */
  exports.prototype.outputType = undefined;
  /**
   * Translation progress for requested entity
   * @member {String} progress
   */
  exports.prototype.progress = undefined;
  /**
   * Status of the requested entity; possible values are: `pending`, `success`, `inprogress`, `failed`, `timeout` and `partialsuccess` 
   * @member {module:model/ManifestDerivative.StatusEnum} status
   */
  exports.prototype.status = undefined;
  /**
   * @member {Array.<module:model/ManifestChildren>} children
   */
  exports.prototype.children = undefined;


  /**
   * Allowed values for the <code>outputType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OutputTypeEnum = {
    /**
     * value: "stl"
     * @const
     */
    "stl": "stl",
    /**
     * value: "step"
     * @const
     */
    "step": "step",
    /**
     * value: "iges"
     * @const
     */
    "iges": "iges",
    /**
     * value: "obj"
     * @const
     */
    "obj": "obj",
    /**
     * value: "svf"
     * @const
     */
    "svf": "svf",
    /**
     * value: "svf2"
     * @const
     */
    "svf2": "svf2",
    /**
     * value: "thumbnail"
     * @const
     */
    "thumbnail": "thumbnail",
    /**
     * value: "dwg"
     * @const
     */
    "dwg": "dwg",
    /**
     * value: "ifc"
     * @const
     */
    "ifc": "ifc"
  };

  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",
    /**
     * value: "inprogress"
     * @const
     */
    "inprogress": "inprogress",
    /**
     * value: "success"
     * @const
     */
    "success": "success",
    /**
     * value: "failed"
     * @const
     */
    "failed": "failed",
    /**
     * value: "timeout"
     * @const
     */
    "timeout": "timeout",
    /**
     * value: "partialsuccess"
     * @const
     */
    "partialsuccess": "partialsuccess"  };


  return exports;
}());



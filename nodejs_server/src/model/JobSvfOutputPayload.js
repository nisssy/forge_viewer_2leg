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
    JobSvfOutputPayloadAdvanced = require('./JobSvfOutputPayloadAdvanced');

  /**
   * The JobSvfOutputPayload model module.
   * @module model/JobSvfOutputPayload
   */

   /**
    * Constructs a <code>JobSvfOutputPayload</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/JobSvfOutputPayload} obj Optional instance to populate.
    * @return {module:model/JobSvfOutputPayload} The populated <code>JobSvfOutputPayload</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data.type, 'String');
      if (data.hasOwnProperty('views'))
        obj.views = ApiClient.convertToType(data.views, ['String']);
      if (data.hasOwnProperty('advanced'))
        obj.advanced = JobSvfOutputPayloadAdvanced.constructFromObject(data.advanced, obj && obj.advanced);

    }
    return obj;
  };

  /**
   * Constructs a new <code>JobSvfOutputPayload</code>.
   * @alias module:model/JobSvfOutputPayload
   * @class
   * @param type {module:model/JobSvfOutputPayload.TypeEnum} The requested output types. Possible values include dwg, fbx, ifc, iges, obj, step, stl, svf, svf2, thumbnail. For a list of supported types, call the [GET formats](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/formats-GET) endpoint.
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobSvfOutputPayload} obj Optional instance to populate.
   */

  // param views {Array.<module:model/JobPayloadItem.ViewsEnum>} Required options for SVF/SVF2 type. Possible values: 2d, 3d
  
  var exports = function(type, theData, obj) {
    var _this = this;

    _this.type = 'svf';
    //_this.views = views;

    return constructFromObject(theData, obj || _this);
  };

  /**
   * Constructs a <code>JobSvfOutputPayload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobSvfOutputPayload} obj Optional instance to populate.
   * @return {module:model/JobSvfOutputPayload} The populated <code>JobSvfOutputPayload</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * The requested output types. Possible values include dwg, fbx, ifc, iges, obj, step, stl, svf, svf2, thumbnail. For a list of supported types, call the [GET formats](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/formats-GET) endpoint.
   * @member {module:model/JobSvfOutputPayload.TypeEnum} type
   */
  exports.prototype.type = 'svf';

  /**
   * Required options for SVF/SVF2 type. Possible values: 2d, 3d
   * @member {Array.<module:model/JobSvfOutputPayload.ViewsEnum>} views
   */
  exports.prototype.views = undefined;

  /**
   * A set of special options, which you must specify only if the input file type is IFC, Revit, or Navisworks.
   * @member {module:model/JobSvfOutputPayloadAdvanced} advanced
   */
  exports.prototype.advanced = undefined;

  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
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
   * Allowed values for the <code>views</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ViewsEnum = {
    /**
     * value: "2d"
     * @const
     */
    "2d": "2d",
    /**
     * value: "3d"
     * @const
     */
    "3d": "3d"
  };

  return exports;
}());


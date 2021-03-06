/**
 * RHMHCP
 * Red Hat Mobile Hot Code Push API
 *
 * OpenAPI spec version: 0.1.0
 * Contact: kxiang@redhat.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DeploymentTargetRHMAPHostApp'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeploymentTargetRHMAPHostApp'));
  } else {
    // Browser globals (root is window)
    if (!root.Rhmhcp) {
      root.Rhmhcp = {};
    }
    root.Rhmhcp.DeploymentTargetRHMAP = factory(root.Rhmhcp.ApiClient, root.Rhmhcp.DeploymentTargetRHMAPHostApp);
  }
}(this, function(ApiClient, DeploymentTargetRHMAPHostApp) {
  'use strict';




  /**
   * The DeploymentTargetRHMAP model module.
   * @module model/DeploymentTargetRHMAP
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>DeploymentTargetRHMAP</code>.
   * RHMAP deployment target
   * @alias module:model/DeploymentTargetRHMAP
   * @class
   * @param target {String} the target url of RHMAP
   * @param username {String} User name / email address used to login
   * @param password {String} Password used to login
   */
  var exports = function(target, username, password) {
    var _this = this;

    _this['target'] = target;
    _this['username'] = username;
    _this['password'] = password;

  };

  /**
   * Constructs a <code>DeploymentTargetRHMAP</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeploymentTargetRHMAP} obj Optional instance to populate.
   * @return {module:model/DeploymentTargetRHMAP} The populated <code>DeploymentTargetRHMAP</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('target')) {
        obj['target'] = ApiClient.convertToType(data['target'], 'String');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('hostApp')) {
        obj['hostApp'] = DeploymentTargetRHMAPHostApp.constructFromObject(data['hostApp']);
      }
    }
    return obj;
  }

  /**
   * the target url of RHMAP
   * @member {String} target
   */
  exports.prototype['target'] = undefined;
  /**
   * User name / email address used to login
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * Password used to login
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * @member {module:model/DeploymentTargetRHMAPHostApp} hostApp
   */
  exports.prototype['hostApp'] = undefined;



  return exports;
}));



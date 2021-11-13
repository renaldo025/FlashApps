"use strict";

var _reactNative = require("react-native");

var _navigation = _interopRequireDefault(require("./src/navigators/navigation"));

var _app = require("./app.json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @format
 */
_reactNative.AppRegistry.registerComponent(_app.name, function () {
  return _navigation["default"];
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWelcome = getWelcome;
exports.getCard = getCard;

var _superagent = _interopRequireDefault(require("superagent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var serverURL = "http://localhost:3000/api/v1"; // *** EXAMPLE ***

function getWelcome() {
  return _superagent["default"].get("".concat(serverURL, "/welcome")).then(function (response) {
    return response.body;
  });
} // ***   ***   ***


function getCard() {
  return _superagent["default"].get("http://localhost:3000/api/v1/welcome").then(function (resp) {
    return resp.body;
  });
}
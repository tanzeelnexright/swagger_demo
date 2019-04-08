'use strict';

var utils = require('../utils/writer.js');
var Admins = require('../service/AdminsService');

module.exports.addUser = function addUser (req, res, next) {
  var body = req.swagger.params['body'].value;
  Admins.addUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addUserAddress = function addUserAddress (req, res, next) {
  var body = req.swagger.params['body'].value;
  Admins.addUserAddress(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

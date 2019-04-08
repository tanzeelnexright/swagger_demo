'use strict';
const userDetailModel = require('../Model/userDetail');
const mongoose = require('mongoose');

module.exports = {
addUser: function(body) {
    return new Promise(function(resolve, reject) {
      body["_id"] = mongoose.Types.ObjectId()
      userDetailModel.create(body)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
    })
  },
  addUserAddress: function(body) {
    return new Promise(function(resolve, reject) {
      body["_id"] = mongoose.Types.ObjectId()
      userDetailModel.create(body)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
    })
  }
}
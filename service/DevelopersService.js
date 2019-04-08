'use strict';
const userDetailModel = require('../Model/userDetail');

module.exports = {
  userDetail: function(userName,mobileNumber,city) {
    return new Promise(function(resolve, reject) {
      userDetailModel.find().exec()
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
    })
  },
}

//  {
//   "addresses" : [ {
//     "pincode" : "pincode",
//     "houseNumber" : "houseNumber",
//     "nearBy" : "nearBy"
//   }, {
//     "pincode" : "pincode",
//     "houseNumber" : "houseNumber",
//     "nearBy" : "nearBy"
//   } ],
//   "city" : "BBSR",
//   "mobileNumber" : 1234567890,
//   "userName" : "Tanzeel Ahmad"
// }, {
//   "addresses" : [ {
//     "pincode" : "pincode",
//     "houseNumber" : "houseNumber",
//     "nearBy" : "nearBy"
//   }, {
//     "pincode" : "pincode",
//     "houseNumber" : "houseNumber",
//     "nearBy" : "nearBy"
//   } ],
//   "city" : "BBSR",
//   "mobileNumber" : 1234567890,
//   "userName" : "Tanzeel Ahmad"
// } 



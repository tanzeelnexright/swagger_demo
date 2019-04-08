const mongoose = require('mongoose');

const UserAddressSchema = mongoose.Schema(
    {
        houseNumber: {
            type: String,
            ref: 'userDetail'
        },
        nearBy: {
            type: String,
            unique: true,
            ref: 'userDetail'
        },
        pincode: {
            type: String,
            ref: 'userDetail'
        }
    });

module.exports = mongoose.model('userAddress', UserAddressSchema);
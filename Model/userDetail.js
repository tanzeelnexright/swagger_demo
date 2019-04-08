const mongoose = require('mongoose');
const UserDetailSchema = mongoose.Schema(
    {
        id: mongoose.Schema.Types.ObjectId,
        userName: {
            type: String,
            require: true
        },
        mobileNumber: {
            type: String,
            unique: true,
            require: true
        },
        city: {
            type: String,
            require: true
        },
        addresses:{
            type: Array
        }
    });

module.exports = mongoose.model('userDetail', UserDetailSchema);
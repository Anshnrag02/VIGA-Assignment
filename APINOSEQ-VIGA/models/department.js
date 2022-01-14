const mongoose = require('mongoose');

const departmentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    asset:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Asset'
    }
})

const Department = mongoose.model('Department',departmentSchema);
module.exports = Department;
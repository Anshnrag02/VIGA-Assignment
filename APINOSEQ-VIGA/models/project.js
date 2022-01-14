const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Department:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Department'
    }
})

const Project = mongoose.model('Project',projectSchema);
module.exports = Project;
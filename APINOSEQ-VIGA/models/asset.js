const mongoose = require('mongoose');

const assetSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
})

const Asset = mongoose.model('Asset', assetSchema);
module.exports = Asset
const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    name: String,
    age: Number
});

const dataModel = mongoose.model("data", dataSchema);

module.exports = {
    dataModel
}
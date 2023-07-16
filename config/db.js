const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb+srv://sagar:sagar@cluster0.sfxoxwy.mongodb.net/backbone?retryWrites=true&w=majority');

module.exports = {
    connection
}
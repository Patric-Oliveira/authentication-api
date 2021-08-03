const mongoose = require('mongoose');

const { Schema } = mongoose;

const HomeSchema = new Schema({
    name: String,
    age: Number,
});

module.exports = mongoose.model('home', HomeSchema);
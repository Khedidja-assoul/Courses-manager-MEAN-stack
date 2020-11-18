const mongoose = require('mongoose');

var Course = mongoose.model('Course', {
    name: { type: String },
    chapters: { type: String },
    objectives: { type: String },
    content: { type: String }
});

module.exports = {Course};
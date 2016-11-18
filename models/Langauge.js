const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: String,
}, { timestamps: true });

const Language = mongoose.model('Language', languageSchema);

module.exports = Language;

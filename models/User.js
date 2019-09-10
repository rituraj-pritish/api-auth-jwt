const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  provider: String,
  providerID: String,
  name: String,
  email: String,
  password: String,
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', userSchema);

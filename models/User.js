const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  provider: String,
  providerID: String,
  name: String,
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', userSchema);
//above name is ploralized in database
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  methods: [String],
  name: String,
  local: {
    email: String,
    password: String
  },
  google: {
    id: String,
    email: String
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', userSchema);
//above name is pluralized in database
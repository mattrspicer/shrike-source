var mongoose = require('mongoose');

var TrialUserSchema = new mongoose.Schema({
  name: { type: String, required: true},
  email: { type: String, required: true},
  updateInterest: {type: Boolean, default:false},
  purchaseInterest: {type: Boolean, default:false}
});

var TrialUsers = mongoose.model('TrialUsers', TrialUserSchema);
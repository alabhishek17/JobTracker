const mongoose = require('mongoose');
const applicationSchema = new mongoose.Schema({
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  jobTitle: String,
  company: String,
  applicationDate: Date,
  status: {type: String, enum: ['Applied','Interview','Offer','Rejected'], required: true},
  notes: String
});
module.exports = mongoose.model('Application', applicationSchema);

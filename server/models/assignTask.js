const mongoose = require('mongoose');

const assignTaskSchema = new mongoose.Schema(
  {
    taskName: { type: String, required: true },
    documentType: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('AssignTask', assignTaskSchema);

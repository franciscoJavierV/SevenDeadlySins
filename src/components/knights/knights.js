const mongoose = require('mongoose');

const knightsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  power: {
      type: Number,
      required:true
  },
  fights:{
    type: String,
  },
  opponent :{
      type:Array,
  }
});

const knights = mongoose.model('Knights', knightsSchema);


exports.knights = knights;


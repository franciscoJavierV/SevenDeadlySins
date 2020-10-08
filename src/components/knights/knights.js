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
  fights : {
      type: Array,
      required: false
  },
  couple : {
    type : String,
  }, 
  fightPicUrl : {
    type: String,
  },
});

const knights = mongoose.model('Knights', knightsSchema);


exports.knights = knights;


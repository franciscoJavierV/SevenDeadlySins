const mongoose = require('mongoose');

const sinsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  power: {
      type: Number,
      required:true
  },
  fights : {
      type: Object,
      required: false
  },
  couple : {
    type : String,
  }, 
  fightPicUrl : {
    type: String,
  },
});

const User = mongoose.model('Sins', sinsSchema);


exports.sins = User;


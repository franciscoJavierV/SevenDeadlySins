const mongoose = require('mongoose');

const sinsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  power: {
      type: Number,
      required:true
  },
  fight : {
      type: Object,
      required: false
  },
  isAdmin: Boolean,  
});

const User = mongoose.model('Sins', sinsSchema);


exports.sins = User;


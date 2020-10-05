const mongoose = require('mongoose');

require('dotenv').config({path:'.env'})
mongoose.connect('mongodb://localhost/SevenDeadlySins', {
    useNewUrlParser: true , 
    useUnifiedTopology: true
}) 
    .then(db => console.log(`DB is connected`))
    .catch(err => console.error(err));

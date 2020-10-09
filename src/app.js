const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require("cors");
const path = require("path");

const corsOptions = 
{
  origin:"*",
  optionsSuccessStatus : 200,
}

//initializations
const app = express();  

//middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'));
app.use(cors(corsOptions));


require('dotenv').config();
// Configuración de routers
require('./startup/routes')(app);
// Inicialización de BD
require('./startup/database');

app.set('port' , process.env.PORT ||  3000);
app.set('views' , path.join(__dirname , 'views'))
app.set('view engine', 'ejs')

//starting the server
app.listen(app.get('port'), () =>{
    console.log(`server on port ${app.get('port')}`)
});

//static files
app.use(express.static(path.join(__dirname, 'public')));
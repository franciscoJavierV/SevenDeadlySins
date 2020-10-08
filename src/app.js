const express = require('express');
const morgan = require('morgan');
const body_parser = require('body-parser');
const bodyParser = require('body-parser');
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");




//initializations
const app = express();  
//settings
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = 
{
  origin:"*",
  optionsSuccessStatus : 200,
}

//middlewares
app.use(helmet());
app.use(helmet.permittedCrossDomainPolicies());
app.use(morgan('dev'));
app.use(express.json());
app.use(cors(corsOptions));


app.use(body_parser.urlencoded({extended:true}));
app.set('port' , process.env.PORT ||  3000);
app.set('views' , path.join(__dirname , 'views'))
app.set('view engine', 'ejs')

require('dotenv').config();

// Configuración de routers
require('./startup/routes')(app);
// Inicialización de BD
require('./startup/database');


//starting the server
app.listen(app.get('port'), () =>{
    console.log(`server on port ${app.get('port')}`)
});

//static files
app.use(express.static(path.join(__dirname, 'public')));
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
//Model
const sinsComponent = require('../components/Sins');
const knightsComponent = require('../components/knights');

module.exports = (app) => {
    // Configuración de middlewares
    app.use(helmet());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.urlencoded({extended:false}))
    app.use(bodyParser.json())
    const corsOptions = {
      origin: '*',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    };
    app.use(cors(corsOptions));
  
    // Configuración componentes
    app.use('/', sinsComponent.routes);
    app.use('/', knightsComponent.routes)

};

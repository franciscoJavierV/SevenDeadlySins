const express = require('express');
const sinsCtrl = require('./sinsController');

const router = express.Router();

router.get('/',  sinsCtrl.hi);



module.exports.routes = router;
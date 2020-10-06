const express = require('express');
const sinsCtrl = require('./sinsController');

const router = express.Router();

router.get('/',  sinsCtrl.hi);
router.get('/sins', sinsCtrl.getAllSins);


module.exports.routes = router;
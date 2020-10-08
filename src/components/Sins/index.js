const express = require('express');
const sinsCtrl = require('./sinsController');

const router = express.Router();

router.get('/',  sinsCtrl.index);
router.post('/post', sinsCtrl.create);
router.get('/hi',  sinsCtrl.getAll);
router.get('/sins', sinsCtrl.getUserInfo);


module.exports.routes = router;
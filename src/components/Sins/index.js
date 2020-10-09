const express = require('express');
const sinsCtrl = require('./sinsController');


const router = express.Router();

//services
router.post('/post', sinsCtrl.create);
router.get('/hi',  sinsCtrl.getAll);
router.get('/sins', sinsCtrl.getUserInfo);

router.get('/prueba', sinsCtrl.prueba);
router.post('/prueba', sinsCtrl.prueba);

//render views
router.get('/',  sinsCtrl.index);
router.get('/soldier',  sinsCtrl.new_soldier);
router.get('/sin',  sinsCtrl.new_sin);

module.exports.routes = router;
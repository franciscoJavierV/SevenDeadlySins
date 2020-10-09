const express = require('express');
const sinsCtrl = require('./sinsController');


const router = express.Router();

//services
router.post('/post', sinsCtrl.create);
router.get('/show_sins',  sinsCtrl.getAll);
router.get('/sins', sinsCtrl.getUserInfo);

router.get('/prueba', sinsCtrl.prueba);
router.post('/prueba', sinsCtrl.prueba);

//render views
router.get('/',  sinsCtrl.index);
router.get('/knight',  sinsCtrl.new_knight);
router.get('/sin',  sinsCtrl.new_sin);
router.get('/show_sins', sinsCtrl.show_sins);
router.get('/show_fights', sinsCtrl.show_fights);

module.exports.routes = router;
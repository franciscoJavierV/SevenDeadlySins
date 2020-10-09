const express = require('express');
const sinsCtrl = require('./sinsController');


const router = express.Router();

//services
router.post('/post', sinsCtrl.create);
router.get('/sins', sinsCtrl.getUserInfo);


//render views
router.get('/',  sinsCtrl.index);
router.get('/knight',  sinsCtrl.new_knight);
router.get('/sin',  sinsCtrl.new_sin);
router.get('/show_sins', sinsCtrl.show_sins);
router.get('/show_fights', sinsCtrl.show_fights);
router.post('/create_sin', sinsCtrl.create)
module.exports.routes = router;
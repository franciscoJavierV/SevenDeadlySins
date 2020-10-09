const express = require('express');
const knightsCtrl = require('./KnightSController');

const router = express.Router();


router.post('knights/post', knightsCtrl.create);
router.get('knights/hi',  knightsCtrl.getAll);
router.get('knights/getall', knightsCtrl.getUserInfo);


module.exports.routes = router;
const express = require('express');
const knightsCtrl = require('./knightController');

const router = express.Router();

router.post('/knights/create', knightsCtrl.create);
router.get('/knights/hi',  knightsCtrl.getAll);
router.get('/knights/getall', knightsCtrl.getUserInfo);

module.exports.routes = router;
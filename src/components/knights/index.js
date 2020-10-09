const express = require('express');
const knightsCtrl = require('./knightController');

const router = express.Router();

router.post('/knights/create', knightsCtrl.create);
router.get('/knights/get',  knightsCtrl.getAll);

module.exports.routes = router;
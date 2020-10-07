const sinsService = require('./sinsService');

async function hi(req, res) {
  res.send('hi');
}
async function index(req, res ){
  res.render('index')
}
async function getAllSins(req, res) {
  res.send(req.body)
}

module.exports = {
    hi,
    getAllSins,
    index
};

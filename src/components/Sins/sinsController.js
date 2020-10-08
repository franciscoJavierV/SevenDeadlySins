const sinsService = require('./sinsService');

async function hi(req, res) {
  res.send('hi');
}
async function index(req, res ){
  res.render('index')
}

async function getUserInfo(req, res) {
  console.log(req.body)
  const user = await sinsService.findById(req.body.id);
  res.send(user);
}

async function create(req ,res){
  console.log(req.body)
  const {name, power, figths , couple, fightPicUrl } =  req.body
  const data = {
    name,
    power,
    figths,
    couple,
    fightPicUrl,
  }
  const newSin = await sinsService.createSins(data);
  return res.send(newSin);
}

async function getAll(req , res) {
  const users = await sinsService.getAll();
  console.log(users)
  return users;
}

module.exports = {
    hi,
    getAll,
    getUserInfo,
    index,
    create,
};

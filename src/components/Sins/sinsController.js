const sinsService = require('./sinsService');


async function index(req, res ){
  res.render('index')
}

async function new_soldier(req, res ){
  res.render('new_soldier')
}

async function new_sin(req, res ){
  res.render('new_sin')
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

async function prueba(req, res){
  console.log(req.body)
  return res.redirect('/sin')
}

module.exports = {
    getAll,
    getUserInfo,
    index,
    create,
    new_soldier,
    prueba,
    new_sin,
};

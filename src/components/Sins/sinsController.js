const sinsService = require('./sinsService');


async function index(req, res ){
  res.render('index')
}

async function new_knight(req, res ){
  res.render('new_knight')
}

async function new_sin(req, res ){
  res.render('new_sin')
}

async function show_sins(req, res ){
  const sin = await sinsService.getAll();
  res.render('show_sins', { sin })
}

async function show_fights(req, res ){
  const sin = await sinsService.getAll();
  res.render('show_fights' , {sin})
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

async function getAll(req, res) {
  const users = await sinsService.getAll();
  res.render('show_sins', { users });
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
    new_knight,
    prueba,
    new_sin,
    show_sins,
    show_fights,
};

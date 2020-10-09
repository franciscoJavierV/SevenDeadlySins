const knightService = require('./knightService');


async function getUserInfo(req, res) {
  console.log(req.body)
  const user = await knightService.findById(req.body.id);
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
  const newSin = await knightService.createSins(data);
  return res.send(newSin);
}

async function getAll(req , res) {
  const users = await knightService.getAll();
  console.log(users)
  return users;
}

module.exports = {
    getAll,
    getUserInfo,
    create,
};

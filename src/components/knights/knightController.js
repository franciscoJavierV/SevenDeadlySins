const knightService = require('./knightService');


async function getUserInfo(req, res) {
  console.log(req.body)
  const knigths = await knightService.findById(req.body.id);
  res.send(knigths);
}

async function create(req ,res){
  console.log(req.body)
  const {name, power, fights , opponent } =  req.body
  const data = {
    name,
    power,
    fights,
    opponent,
  }
  const newknigth = await knightService.createKnights(data);
  return res.redirect('/knight');
}

async function getAll(req , res) {
  const knigths = await knightService.getAll();
  console.log(knigths)
  return res.redirect('/');
}

module.exports = {
    getAll,
    getUserInfo,
    create,
};

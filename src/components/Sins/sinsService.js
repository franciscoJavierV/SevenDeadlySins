const { sins } = require("./sins");

async function findById(userid) {
  const sins = await sins.findById(userid);
  return sins;
}

async function getAll() {
  const sin = await sins.find();
  return sin;
}

async function createSins( data ){
  console.log(data)
    const { name, power, figths, fightPicUrl, couple } = data;  
    const newSin = await sins.create({
      name,
      power,
      figths,
      fightPicUrl,
      couple,
    });
    return newSin; 
  }

module.exports = {
  createSins,
  findById,
  getAll,
};
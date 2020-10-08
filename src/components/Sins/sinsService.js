const { sins } = require("./sins");

async function findById(userid) {
  const user = await sins.findById(userid);
  return user;
}

async function getAll() {
  const users = await sins.find();
  return users;
}


async function createSins( data ){
  console.log(data)
    const { name, power, figths, fightPicUrl, couple } = data;  
    const newSin = await sins.create({
      name,
      power,
      figths,
      fightPicUrl,
      couple
    });
    return newSin; 
  }

module.exports = {
  createSins,
  findById,
  getAll,
};
const { knights } = require("./knights");

async function findById(userid) {
  const user = await knights.findById(userid);
  return user;
}

async function getAll() {
  const users = await knights.find();
  return users;
}


async function createKnights( data ){
  console.log(data)
    const { name, power, figths, fightPicUrl, couple } = data;  
    const newSin = await knights.create({
      name,
      power,
      figths,
      fightPicUrl,
      couple
    });
    return newSin; 
  }

module.exports = {
  createKnights,
  findById,
  getAll,
};
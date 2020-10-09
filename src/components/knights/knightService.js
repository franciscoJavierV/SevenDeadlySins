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
    const { name, power, fights, opponent,  } = data;  
    const newSin = await knights.create({
      name,
      power,
      fights,
      opponent,
    });
    return newSin; 
  }

module.exports = {
  createKnights,
  findById,
  getAll,
};
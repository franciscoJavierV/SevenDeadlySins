const { sins } = require("./sins");

async function findById(userid) {
  const user = await sins.findById(userid);
  return user;
}

async function getAll(query) {
  const users = sins.find(query);
  return users;
}

async function createUser( user ) {
    console.log(user)
    console.log("create user ",user.user)
    const { name, power, figth } = user;
    console.log("nuevo nombre",name)
    const createUserId = await sins.create({
      name,
      power,
      figth,
    });
    return createUserId;
  }

module.exports = {
  createUser,
  findById,
  getAll,
};
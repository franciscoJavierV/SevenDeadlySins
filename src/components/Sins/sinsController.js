const sinsService = require('./sinsService');

async function hi(req, res) {
  res.send('hi');
}

async function getAllSins(req, res) {
  let sins = await sinsService.findById(req.body.id);
  sins = await sinsService.createUser(req.body);
  console.log('info', `Usuario creado ${sins}`);
  return res.send(_.pick(sins, ['_id', 'name', 'email']));

}

module.exports = {
    hi,
    getAllSins,
};

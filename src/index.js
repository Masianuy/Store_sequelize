const {Op} = require('sequelize');
const db = require('./models');

(async function() {
  try {
    await db.sequelize.authenticate();
    console.log('Connection was successful');
  } catch (error) {
    console.log('Our error:', error )
  }
})();

const brandsAll = db.Brands.findAll({
  raw: true,
})
console.log(brandsAll);

//IIFE
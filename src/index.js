const {Op} = require('sequelize');
const db = require('./models');

(async function() {
  try {
    await db.sequelize.authenticate();
    console.log('Connection was successful');
  } catch (error) {
    console.log('Authenticate error:', error.message);
  }


  // Create customer with bcrypt password
  try {
    const customer = await db.Customer.create({
      name: 'Sophia Vivi',
      email: 'vivi@gmail.com',
      password: '14258tyyjhg'
    })
  } catch (error) {
    console.log('Customer didn`t creat:', error.message);
  }

  // try {
  //   await db.sequelize.sync({ alter: true });
  // } catch (error) {
  //   console.log('Sync error:', error.message);
  // }

  // try {
  //   await db.sequelize.drop({ cascade: true })
  // } catch (error) {
  //   console.log('Drop error:', error.message);
  // }

  // 1. Get all from table
        // const brandsAll = await db.Brand.findAll({
        //   raw: true,
        // })
        // console.log(brandsAll);

  // 2. Get Stores by id more then 3
        // const storesMoreThan3 = await db.Store.findAll({
        //   raw: true,
        //   where: {
        //     id: {[Op.gt]: 3}
        //   }
        // })
        // console.log(storesMoreThan3);

  // 3. Get customer by id:1
        // const getInfoAboutCustomer = await db.Customer.findAll({
        //   raw: true,
        //   attributes: ['name', 'email'],
        //   where: {
        //     id: {[Op.eq]: 1},
        //   }
        // });
        // console.log(getInfoAboutCustomer);


  // 4. Delete Bosch from table
        // const deleteBosch = await db.Brand.destroy({
        //   where: {
        //     title: {[Op.eq]: 'Bosch'}
        //   }
        // });
        // console.log(deleteBosch);

  // 5. Update Customert Ann
        // const updateCustomerAnn = await db.Customer.update(
        //   {name: 'Victoria'},
        //   {where: {name: 'Ann-Mari'}}
        // );
        // console.log(updateCustomerAnn);

})();

//IIFE
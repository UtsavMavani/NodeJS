const dbConfig = require('../config/dbConfig.js');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PWD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  logging: false
});

sequelize.authenticate()
.then(() => {
    console.log('Database Connected.');
})
.catch(err => {
  console.log('Database Error.' + err);
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require('./productModel.js')(sequelize, DataTypes);
db.users = require('./userModel.js')(sequelize, DataTypes);

db.sequelize.sync({ force: false })
.then(() => {
  console.log('Sync done.');
});

module.exports = db;
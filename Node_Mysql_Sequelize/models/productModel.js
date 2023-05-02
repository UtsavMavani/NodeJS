module.exports = (sequelize, DataTypes) => {

  const Product = sequelize.define('product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    discription: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  })

  return Product;
}
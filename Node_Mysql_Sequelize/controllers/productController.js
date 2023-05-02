const db = require('../models/index.js');

const Product = db.products;


// 1. add product
const addProduct = async(req, res) => {
  try {
    let info = {
      name: req.body.name,
      price: req.body.price,
      discription: req.body.discription,
      isAvailable: req.body.isAvailable 
    }
  
    const product = await Product.create(info);
    res.status(200).json(product);
  } catch (e) {
    console.log(e);
    res.status(400).json("Record not added !");
  }
}


// 2. get all products
const getAllProduct = async(req, res) => {
  try {
    let products = await Product.findAll({});
    res.status(200).json(products);
  } catch (e) {
    console.log(e);
    res.status(404).json("Records not found !");
  }
}


// 3. get single product
const getOneProduct = async(req, res) => {
  try {
    let id = req.params.id;

    let product = await Product.findOne({ where: {id: id} });
    if(product === null){
      res.status(404).json({msg: `Product not found of id : ${id}`});
    } else {
      res.status(200).json(product);
    }
  } catch (e) {
    console.log(e);
    res.status(404).json("Record not found !");
  }
}


// 4. update product
const updateProduct = async(req, res) => {
  try {
    let id = req.params.id;

    const product = await Product.update(req.body, { where: {id: id} });
    if(product == 0){
      res.status(404).json({msg: `Product not found of id : ${id}`});
    } else {
      res.status(200).json(`Product id ${id} is updated.`);
    }
  } catch (e) {
    console.log(e);
    res.status(400).json("Record not updated !");
  }
}


// 4. delete product
const deleteProduct = async(req, res) => {
  try {
    let id = req.params.id;

    const product = await Product.destroy({ where: {id: id} });
    if(product == 0){
      res.status(404).json({msg: `Product not found of id : ${id}`});
    } else {
      res.status(200).json(`Product id ${id} is deleted.`);
    }
  } catch (e) {
    console.log(e);
    res.status(400).json("Record not deleted !");
  }
}


module.exports = {
  addProduct, 
  getAllProduct, 
  getOneProduct, 
  updateProduct, 
  deleteProduct 
};
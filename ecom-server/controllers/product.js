const Product = require('../models/product');

const getProducts = async (req, res, next) => {
  const products = await Product.fetchAll();
  res.json(products);
}

const getProductById = async (req, res, next) => {
  const product = await Product.fetchById(req.params.id);
  res.json(product);
}

module.exports = {
  getProducts,
  getProductById
}
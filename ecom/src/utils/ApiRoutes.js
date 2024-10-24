const HOST = 'http://localhost:3000';
const API = '/api';


// Products
const PRODUCTS_ALL = `${HOST}${API}/products`
const PRODUCTS_ONE = (id) => `${PRODUCTS_ALL}/${id}`

module.exports = {
  products : {
    all: PRODUCTS_ALL,
    one: PRODUCTS_ONE
  }
}
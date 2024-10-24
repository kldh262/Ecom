const data = require('./product.json');

const fetchAll = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

const fetchById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = data.find((item) => +item.id === +id);
      resolve(product);
    }, 1000);
  });
};

module.exports = {
  fetchAll,
  fetchById,
};
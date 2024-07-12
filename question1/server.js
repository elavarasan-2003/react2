const express = require('express');

const app = express();
const port = 3000;


const products = [
    { name: 'laptop 1 ', brand: 'Lenovo', price: 10000 },
    { name: ' laptop 2', brand: 'Acer', price: 25000 },
    { name: 'laptop 3', brand: 'HP', price: 27990 },
    { name: 'laptop 4', brand: 'Dell', price: 33590 },
    { name: 'laptop 5', brand: 'Google', price: 25990 },];
  


const filterProducts = (req, res) => {
  const { top, minPrice, maxPrice } = req.query;


  const topInt = parseInt(top, 10) || 10; 
  const minPriceInt = parseFloat(minPrice) || 0;
  const maxPriceInt = parseFloat(maxPrice) || Infinity;

  const filteredProducts = products
    .filter(product => product.price >= minPriceInt && product.price <= maxPriceInt)
    .slice(0, topInt);

  res.json(filteredProducts);
};


app.get('/test/companies/AMZ/Laptop/products', filterProducts);


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
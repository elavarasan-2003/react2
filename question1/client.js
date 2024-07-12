const express = require('express');
const axios=require('axios');
axios.get('http://localhost:3000/test/companies/AMZ/Laptop/products', {
    params: {
      top: 10, 
      minPrice: 1, 
      maxPrice: 30000, 
    }
  })
  .then(response => { 
    console.log(response.data); 
  })
  .catch(error => {
    console.error(error); 
  });
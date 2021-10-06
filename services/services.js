import axios from 'axios';

const apiUrl = 'https://proshopbyhassan.herokuapp.com';

// Get Products
export const getProducts = async () => {
  const resp = await axios.get(`${apiUrl}/api/products`);
  return resp.data.products;
  //console.log(resp.data.products);
  //console.log(resp.data.products[0].images[0].url);
};

//working
// console.log(resp.data.products[0].images[0].url);

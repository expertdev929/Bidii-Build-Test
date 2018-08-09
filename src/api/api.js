import axios from 'axios';

export function fetchProducts() {
  return axios.get('https://bidiibuild-test-api.herokuapp.com/api/v1/products');
}
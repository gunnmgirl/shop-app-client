import axios from "../http";

function getAllProducts(payload) {
  return axios.get(`/products`);
}

export default {
  getAllProducts,
};

export { getAllProducts };

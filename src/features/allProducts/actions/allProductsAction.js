export const getAllProducts = (payload) => {
  return {
    type: "GET_ALL_PRODUCTS_REQUEST",
    payload,
  };
};

const INITIAL_STATE = {
  allProducts: [],
  product: {
    name: "",
    description: "",
    price: null,
    creator: {},
  },
  loading: false,
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  console.log("action in reducer: ", action);
  switch (action.type) {
    case "GET_ALL_PRODUCTS_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "GET_ALL_PRODUCTS_SUCCESS":
      return {
        ...state,
        allProducts: action.payload,
        loading: false,
        error: false,
      };
    case "GET_ALL_PRODUCTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

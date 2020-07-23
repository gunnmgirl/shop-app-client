import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllProducts } from "../actions/allProductsAction";

function AllProducts() {
  const products = useSelector((state) => state.allProducts.allProducts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  console.log("products: ", products);

  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>{product.name}</div>
      ))}
    </div>
  );
}

export default AllProducts;

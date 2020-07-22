import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AllProducts from "./features/allProducts/components/AllProducts";
import MyProducts from "./features/myProducts/components/MyProducts";
import ProductDetails from "./features/productDetails/components/ProductDetails";
import User from "./features/user/components/User";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/admin/:id" component={User}></Route>
          <Route path="/admin" exact component={MyProducts}></Route>
          <Route path="/:id" component={ProductDetails}></Route>
          <Route path="/" component={AllProducts}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

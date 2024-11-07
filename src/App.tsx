import React from "react";
import Counter from "./components/Counter";
import { ProductsList } from "./components/ProductsList";
import { SignUpForm } from "./components/SignUpForm";
import { Cart } from "./components/Cart";
import { CartList } from "./components/CartList";
const App = () => {
  return (
    <div>
      <CartList />
      <Cart />
      <SignUpForm />
      <Counter />
      <ProductsList />
    </div>
  );
};

export default App;

import React from "react";
import Counter from "./components/Counter";
import { ProductsList } from "./components/ProductsList";
import { SignUpForm } from "./components/SignUpForm";
const App = () => {
  return (
    <div>
      <SignUpForm />
      <Counter />
      <ProductsList />
    </div>
  );
};

export default App;

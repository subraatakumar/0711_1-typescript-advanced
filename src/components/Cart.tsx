import React from "react";
import { useAppSelector } from "../redux/store";

export const Cart = () => {
  const cartProducts = useAppSelector((state) => state.products.cart);
  return (
    <div>
      <h1>Cart</h1>
      <button>Products Count: {cartProducts.length}</button>
    </div>
  );
};

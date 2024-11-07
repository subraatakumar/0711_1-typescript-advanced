import React from "react";
import { useAppSelector } from "../redux/store";
import { SingleProduct } from "./SingleProduct";

export const CartList = () => {
  const datas = useAppSelector((state) => state.products.cart);
  return (
    <div>
      <h1>Products in Cart</h1>
      {datas.map((data) => (
        <SingleProduct data={data} isCart={true} />
      ))}
    </div>
  );
};

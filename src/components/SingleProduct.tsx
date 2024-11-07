import React from "react";
import { ProductResponseType } from "../types/productsResponse";
import { useAppDispatch } from "../redux/store";
import { addToCart } from "../redux/slices/productSlice";

type SingleProductPropType = {
  data: ProductResponseType;
  isCart: boolean;
};

export const SingleProduct = (props: SingleProductPropType) => {
  const dispatch = useAppDispatch();

  return (
    <div
      style={{
        padding: 10,
        margin: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "grey",
        borderStyle: "solid",
      }}
    >
      <h3>{props.data.title}</h3>
      <p>{props.data.description}</p>
      <p>{props.data.price}</p>
      {!props.isCart ? (
        <button onClick={() => dispatch(addToCart(props.data))}>
          Add To Cart
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

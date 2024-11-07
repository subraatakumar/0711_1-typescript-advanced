import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { fetchProducts } from "../redux/slices/productSlice";
import { SingleProduct } from "./SingleProduct";

export const ProductsList = () => {
  const dispatch = useAppDispatch();
  const { datas, loading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error.length > 0) {
    return <p>{error}</p>;
  }
  return (
    <div>
      <h1>ProductsList</h1>
      {datas.map((data) => (
        <SingleProduct data={data} />
      ))}
    </div>
  );
};

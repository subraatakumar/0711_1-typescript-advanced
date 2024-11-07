import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductResponseType } from "../../types/productsResponse";

export const fetchProducts = createAsyncThunk<ProductResponseType[]>(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
);

type initialStateType = {
  datas: ProductResponseType[];
  cart: ProductResponseType[];
  loading: boolean;
  error: string;
};

const initialState: initialStateType = {
  datas: [],
  loading: false,
  error: "",
  cart: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.datas = [];
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.datas = action.payload;
        state.error = "";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.datas = [];
        state.error = action.error.message || "Failed to fetch products.";
      });
  },
});

export const { addToCart } = productSlice.actions;
export default productSlice.reducer;

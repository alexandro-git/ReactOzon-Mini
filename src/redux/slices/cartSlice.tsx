import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProductCartLS } from "../../utils/getProductCartLS";

export type itemCart = { id: number,
  price: number,
  title: string,
  imgUrl:string,
  count:number
  };

interface cartSliceTypes{
  totalProductPrice: number
  totalProductsCart: itemCart[],
}

const {totalProductPrice, totalProductsCart}=getProductCartLS()

const initialState:cartSliceTypes = {
  totalProductPrice,
  totalProductsCart,
};

export const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<itemCart>) => {
      const findProduct = state.totalProductsCart.find(
        (obj) => obj.id === action.payload.id
      );

      if (findProduct) {
        findProduct.count++;
      } else {
        state.totalProductsCart.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalProductPrice = state.totalProductsCart.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    countMinus: (state, action:PayloadAction<number>) => {
      const findProduct = state.totalProductsCart.find(
        (obj) => obj.id === action.payload
      );

      if (findProduct) {
        findProduct.count--;
      } 
    },
    removeProductinCart: (state, action:PayloadAction<number>) => {
      state.totalProductsCart = state.totalProductsCart.filter(
        (obj) => obj.id !== action.payload
      );
    },
    clearProductCart: (state) => {
      state.totalProductsCart = [];
      state.totalProductPrice = 0;

    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeProductinCart, countMinus, clearProductCart } =
  cartReducer.actions;

export default cartReducer.reducer;

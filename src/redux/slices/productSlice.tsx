import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type sidebarType = {
  name: string,
  catg: number
}
type listTypes={
  name: string,
  namecatalog: string

  
} 

interface FetchProducts {
  selectCat: listTypes,
  sortTypes: string,
  sidebarSort: sidebarType,
  selectCurrentPage: number
}

export const fetchProducts = createAsyncThunk<itemProducts[], FetchProducts>(
  'product/fetchProductStatus',
  async (parametrs) => {
    const { selectCat, sortTypes, sidebarSort, selectCurrentPage } = parametrs;
    const { data } = await axios
      .get(
        `https://629b7593656cea05fc39811d.mockapi.io/prod?limit=3&page=${selectCurrentPage}&namecatalog=${selectCat}&catg=${sidebarSort
        }&sortBy=${sortTypes.replace("-", "")}&order=${sortTypes.includes("-") ? "desc" : "asc"
        }`
      )
    return data
  }
)

type itemProducts = {
  id: number,
  price: number,
  title: string,
  imgUrl: string,
  count: number,
  size:number[],
  priceNonSale:number,
  salesman:string,
  namecatalog:string
  
};

interface productsSliceState {
  products: itemProducts[],
  status: string
}

const initialState: productsSliceState = {
  products: [],
  status: 'load'
};

export const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    },

  },


  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = 'Load'
      state.products = []
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload
      state.status = "successfulli"
    })
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = "error"
      state.products = []
    })
  }
})



export const { setProducts } =
  productReducer.actions;

export default productReducer.reducer;

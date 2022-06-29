import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type listTypes={
  name: string,
  namecatalog: string
}

type sortTypes={
  name: string,
  sortby: string
}
type sidebarType = {
  name: string,
  catg: number
}
interface filterTypes{
  list: listTypes,
  sortItems: sortTypes,
  searchValue: string,
  currentPage: number,
  sidebarItems:sidebarType

}


const initialState:filterTypes = {
  list: { 
    name: "Одежда",
    namecatalog: "clothes" },

  sortItems: {
    name: "популярные",
    sortby: "rating",
  },
  searchValue:'',
  currentPage: 1,
  sidebarItems:{
    name: "Женщинам",
    catg: 1,
  }
};

export const filterReduce = createSlice({
  name: "filterz",
  initialState,
  reducers: {
    selectCategory: (state, action:PayloadAction<listTypes>) => {
   
           state.list = action.payload;

    },
    setSidebarSort: (state, action:PayloadAction<sidebarType>) => {
     
             state.sidebarItems = action.payload;
  
      },
    setSortTypes: (state, action:PayloadAction<sortTypes>) => {
      state.sortItems = action.payload;
    },
    setSearchValue:(state, action:PayloadAction<string>) => {
        state.searchValue = action.payload;
      },
      setCurrentPage:(state, action:PayloadAction<number>) => {
        state.currentPage = action.payload;
      },
  },
});

// Action creators are generated for each case reducer function
export const { selectCategory, setSortTypes, setSearchValue, setCurrentPage, setSidebarSort } = filterReduce.actions;

export default filterReduce.reducer;

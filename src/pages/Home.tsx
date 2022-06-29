import React from "react";
import ShoppingCart from "../components/ShoppingCart";
import Sidebars from "../components/Sidebars";
import Sort from "../components/Sort";
import { useSelector } from "react-redux";
import { setCurrentPage } from "../redux/slices/filterSlice";
import { fetchProducts } from "../redux/slices/productSlice";
import Pagination from "../components/Pagination";
import { RootState, useAppDispatch } from "../redux/store";



const Home: React.FC = () => {

  
  const searchVal = useSelector(
    (state: RootState) => state.filterReduce.searchValue
  );
  const selectCat = useSelector((state: RootState) => state.filterReduce.list);
  const sidebarSort = useSelector(
    (state: RootState) => state.filterReduce.sidebarItems
  );
  const products = useSelector(
    (state: RootState) => state.productReducer.products
  );
  const selectCurrentPage = useSelector(
    (state: RootState) => state.filterReduce.currentPage
  );
  const sortTypes = useSelector(
    (state: RootState) => state.filterReduce.sortItems.sortby
  );

 
  const getProducts = async () => {
    dispatch(
      fetchProducts({ selectCat, sortTypes, sidebarSort, selectCurrentPage })
    );
  };
  const setselectCurrentPage = (num: number) => {
    dispatch(setCurrentPage(num));
  };
  const dispatch = useAppDispatch();

  React.useEffect(() => {
  getProducts()
  }, [selectCat, sortTypes, sidebarSort, searchVal, selectCurrentPage]);





  return (
    <div>
      <Sort />
      <div className="sidebar">
        <Sidebars />
        <div className="rid ">
          {products
            .filter((prod) => {
              if (prod.title.toLowerCase().includes(searchVal)) {
                return true;
              }
              return false;
            })
            .map((obj) => (
              <ShoppingCart key={obj.id} {...obj} />
            ))}
        </div>
      </div>

      <Pagination
        selectCurrentPage={selectCurrentPage}
        setselectCurrentPage={setselectCurrentPage}
      />
    </div>
  );
};
export default Home;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchValue } from "../redux/slices/filterSlice";
import { RootState } from "../redux/store";

function Search() {
  const searchVal = useSelector(
    (state: RootState) => state.filterReduce.searchValue
  );
  const dispatch = useDispatch();

  return (
    <div className="search flex ">
      <div className=" xl:w-96">
        <input
          value={searchVal}
          onChange={(e) => dispatch(setSearchValue(e.target.value))}
          type="text"
          className=" ml-6
form-control
block
w-full
px-2
py-1
text-base
font-normal
text-gray-700
bg-white bg-clip-padding
border border-solid border-gray-300
rounded
transition
ease-in-out
m-0
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
"
          id="exampleFormControlInput1"
          placeholder="Поиск..."
        />
      </div>

      {searchVal && (
        <img
          onClick={() => dispatch(setSearchValue(" "))}
          className="w-3 h-3 mt-3 mr-3 cursor-pointer"
          src="img\cross.svg"
          alt=""
        />
      )}
      {/* <button
        type="submit"
        onClick={() => {dispatch(setSearchValue(searchVal))}}
        className="px-2
py-1 bg-indigo-500 border rounded text-white"
      >
        Искать
      </button> */}
    </div>
  );
}

export default Search;

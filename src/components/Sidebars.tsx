import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSidebarSort } from "../redux/slices/filterSlice";
import { RootState } from "../redux/store";

type sidebarOpt={
  name: string;
  catg: number;
}



const Sidebars:React.FC=()=> {

  const sidebarSort = useSelector((state:RootState) => state.filterReduce.sidebarItems);
  const dispatch = useDispatch();


  const sidebarOptions:sidebarOpt[] = [
    { name: "Женщинам", catg: 1 },
    { name: "Мужчинам", catg: 2 },
    { name: "Детям", catg: 3 },
  ];

  const setSelectedSortSidebar = (i:sidebarOpt) => {
    dispatch(setSidebarSort(i))
  };

  return (
    <div>
      <div className="sidebar_left mt-2 border">
        <ul>
          {sidebarOptions.map((obj, i) => (
            <li
              key={i}
              onClick={() => setSelectedSortSidebar(obj)}
              className={
                sidebarSort.catg === obj.catg
                  ? "pr-7 pl-3 pt-2 pb-2  cursor-pointer bg-gray-300 "
                  : "pr-7 pl-3 pt-2 pb-2  cursor-pointer hover:text-indigo-500"
              }
            >
              {obj.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default  Sidebars
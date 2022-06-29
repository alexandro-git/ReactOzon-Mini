import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSortTypes } from "../redux/slices/filterSlice";
import { RootState } from "../redux/store";


const Sort: React.FC = () => {
  const [sort, setSort] = React.useState(false);
  const sortByName = useSelector(
    (state: RootState) => state.filterReduce.sortItems
  );
  const dispatch = useDispatch();
  type SortType = {
    name: string;
    sortby: string;
  };

  const sortItems: SortType[] = [
    { name: "рейтинг высокий", sortby: "-rating" },
    { name: "рейтинг низкий", sortby: "rating" },
    { name: "дешевые", sortby: "price" },
    { name: "дорогие", sortby: "-price" },
    { name: "алфавит", sortby: "title" },
  ];

  const popupSelected = (obj: SortType) => {
    dispatch(setSortTypes(obj));
    setSort(false);
  };

  const clickOutsidePopup = (e: MouseEvent) => {
    const _event = e as MouseEvent & {
      path: Node[];
    };
    if (refHref.current && !_event.path.includes(refHref.current)) {
      setSort(false);
    }
  };
  React.useEffect(() => {
    document.body.addEventListener("click", clickOutsidePopup);
  }, []);

  const refHref = React.useRef<HTMLDivElement>(null);

  return (
    <div className="mt-8 mb-8 flex justify-between">
      <div className="head text-3xl">Все товары</div>
      <div ref={refHref}>
        <div
          onClick={() => setSort(!sort)}
          className="sort px-2
py-1  bg-white  border rounded text-black cursor-pointer ml-6 mr-4 hover:border-indigo-500"
        >
          ▼ {sortByName.name}
        </div>
        {sort && (
          <div className="sort_popup absolute ml-6">
            <ul className="sort_list mt-2 bg-slate-100  border-black">
              {sortItems.map((obj, i) => (
                <li
                  key={i}
                  onClick={() => popupSelected(obj)}
                  className={
                    sortByName.sortby === obj.sortby
                      ? " pr-7 pl-3 pt-2 pb-2 text-indigo-500  cursor-pointer bg-gray-300"
                      : " pr-7 pl-3 pt-2 pb-2  cursor-pointer hover:text-indigo-500 hover:bg-white   "
                  }
                >
                  {" "}
                  {obj.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default Sort;

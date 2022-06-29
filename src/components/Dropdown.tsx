import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "../redux/slices/filterSlice";
import { RootState } from "../redux/store";

export default function Dropdown() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const selectCat = useSelector((state:RootState) => state.filterReduce.list);

type listItems={
  name: string,
  namecatalog: string
}

  const list:listItems[] = [
    { name: "Одежда", namecatalog: "clothes" },
    { name: "Обувь", namecatalog: "shoes" },
    { name: "Книги", namecatalog: "books" },
    { name: "Красота и здоровье", namecatalog: "beauty" },
    { name: "Продукты питания", namecatalog: "eat" },
  ];

  const refCatalog = React.useRef<HTMLDivElement>(null);

  const setSelectedCatalog = (i:any) => {
    dispatch(selectCategory(i));
    setOpen(false);
  };
  const catalogPopupOutside = (e:any) => {
    if (!e.path.includes(refCatalog.current)) {
      setOpen(false);
    }

    
  };

  React.useEffect(() => {
    document.body.addEventListener("click", catalogPopupOutside);
  }, []);

  return (
    <div ref={refCatalog}>
      <div
        onClick={() => setOpen(!open)}
        className="catalog  px-2  
py-1 bg-indigo-500 border hover:border-white rounded text-white cursor-pointer ml-6 mr-4"
      >
        ☰ Каталог
      </div>
      {open && (
        <div className="catalog_popup absolute ml-6  ">
          <ul className="catalog_list mt-2 bg-slate-100  border">
            {list.map((obj, i) => (
              <li
                key={i}
                onClick={() => setSelectedCatalog(obj.namecatalog)}
                className={
                  selectCat.namecatalog === obj.namecatalog
                    ? "pr-7 pl-3 pt-2 pb-2  cursor-pointer text-indigo-500 bg-gray-300"
                    : "pr-7 pl-3 pt-2 pb-2  cursor-pointer hover:text-indigo-500 hover:bg-white"
                }
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

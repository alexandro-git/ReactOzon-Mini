import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

type ShoppingCartState = {
  id: number;
  price: number;
  priceNonSale: number;
  title: string;
  size: number[];
  salesman: string;
  imgUrl: string;
  count: number;
};

const ShoppingCart: React.FC<ShoppingCartState> = ({
  id,
  price,
  priceNonSale,
  title,
  size,
  salesman,
  imgUrl,
  count,
}) => {
  const dispatch = useDispatch();

  const addtocart = () => {
    const cartitems = { id, price, title, imgUrl, count };
    dispatch(addToCart(cartitems));
  };

  return (
    <div className=" shadow-lg bg-white w-66">
      <img className=" h-64" src={imgUrl} alt="img" />

      <div  className="p-4 ">
        <div className="rub">
          <h5 className="text-gray-900 text-base font-medium mb-2 ">
            <div className="price flex">
              <div className="pr1 mr-2">{price}&#8381;</div>{" "}
              <div  className="pr2 line-through text-sm text-red-500">
                {priceNonSale}&#8381;
              </div>{" "}
            </div>
          </h5>
        </div>
        <div className="stars mt-1 mb-1">
          ⭐⭐⭐⭐⭐
          <a href="!#" className="hover:text-indigo-500 text-xs">
            324 отзыва
          </a>{" "}
        </div>
        <p className="text-gray-700 text-base mb-1 hover:text-indigo-500 cursor-pointer ">
          {title}
        </p>
        <br />
        <ul className="size text-sm flex">
          {size.map((sz, index) => (
            <li key={index}>  {sz}&nbsp;</li>
          ))}
        </ul>
        <button
          onClick={addtocart}
          type="button"
          className=" inline-block mt-4 px-5 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          В корзину
        </button>
        <div className="deliveri mt-1 text-gray-700 text-sm mb-1">
          {salesman}
        </div>
      </div>
    </div>
  );
};
export default ShoppingCart;

import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, countMinus, removeProductinCart } from "../redux/slices/cartSlice";

type ItemsCartProps={ id:number, price: number, title: string, imgUrl:string, count: number }


  const ItemsCart:React.FC<ItemsCartProps>=({ id, price, title, imgUrl, count })=>{

 const dispatch = useDispatch();

  const addtocart = () => {
    const cartitems = { id,
      price,
      title,
      imgUrl,
      count
      };
    dispatch(addToCart(cartitems));
  };
  const itemMinus = () => {
    
    dispatch(countMinus(id));
  };
  const deleteProduct = () => {
    
    dispatch(removeProductinCart(id));
  };
  return (
    <div className="cart_item flex items-center	justify-between bg-gray-100 mb-6 	">
      <img className="w-20" src={imgUrl} alt="" />
      <h4 className=" text-lg">{title}</h4>
      <div className="cart_counter ">
        <button disabled={count===1} onClick={itemMinus} className="minus_item mr-4 px-2  py-1 bg-indigo-500 border hover:border-white rounded text-white">
          -
        </button>
        <b>{count}</b>
        <button onClick={addtocart} className="plus_item ml-4 px-2  py-1 bg-indigo-500 border hover:border-white rounded text-white">
          +
        </button>
      </div>
      <p className="text-lg">{price * count} &#8381;</p>
      <button onClick={deleteProduct} className="delete_item mr-6">&#10006;</button>
    </div>
  );
}
export default ItemsCart
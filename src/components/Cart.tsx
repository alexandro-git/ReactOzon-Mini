import React from "react";
import ItemsCart from './ItemsCart'
import CartEmpty from './CartEmpty'
import { useSelector, useDispatch } from "react-redux";
import { clearProductCart} from '../redux/slices/cartSlice'
import { RootState } from "../redux/store";

export default function Cart() {
  const {totalProductsCart , totalProductPrice } =useSelector((state:RootState) => state.cartReducer)
  const dispatch = useDispatch();
const emptyCart=()=>{
  if(window.confirm("Очистить корзину?")){
    dispatch(clearProductCart())

  }
}
const totalCount=totalProductsCart.reduce((sum:number, item:any)=>sum+item.count, 0)

if(!totalProductPrice){
return <CartEmpty/>
}

  return (
    <div className="cart_global bg-white m-28">


      <div className="header_cart">
        <div className="hcartimg text-3xl mb-16">
          <img className="w-12" src='' alt="" />
          <h1>Корзина</h1>
        </div>
        <div className="clear_cart mb-4 flex flex-row-reverse items-center">
          <button onClick={emptyCart} className="but_clear  text-gray-500 underline-offset-4 underline ">Очистить корзину</button>
          <img className="w-6 mr-2" src="img/emptycart.png" alt="" />

        </div>

{
  totalProductsCart.map((prod)=>(
    <ItemsCart key={prod.id} {...prod} />
  ))
  
}

      
      
        
        <div className="footer_cart flex items-center	justify-between text-2xl">
          <div className="total_items">
            <p>Всего заказов: {totalCount} шт.</p>
          </div>
          <div className="total_price    ">
            <p>Общая сумма: {totalProductPrice} &#8381; </p>
          </div>
        </div>
      </div>



    </div>
  );
}

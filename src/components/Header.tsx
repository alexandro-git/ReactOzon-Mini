import React from "react";
import Dropdown from "./Dropdown";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

function Header() {

const isMounted = React.useRef(false)
  
const {totalProductsCart , totalProductPrice } =useSelector((state:RootState) => state.cartReducer)
const totalCount=totalProductsCart.reduce((sum: number, item: any)=>sum+item.count, 0)

React.useEffect(()=>{
  if(isMounted.current){
    const storJson=JSON.stringify(totalProductsCart)
  localStorage.setItem('cart', storJson)
  }
  isMounted.current=true
    },[totalProductsCart])

  return (
    <div>
      <div className="header h-10 mt-2 flex justify-between items-center">
        <div className="logo flex justify-between">
          <div className="logo2 cursor-pointer">
            <Link to="/">
              {" "}
              <img className="w-36  mr-6" src="img/logo-2-Ozon.png" alt="" />
            </Link>
          </div>

          <Dropdown />

          <Search />
        </div>

        <div className="cart flex ">
          {/* <Link to="/cart">
            {" "}
            <img className="w-8" src="img/heart.png" alt="" />
          </Link> */}

          <div className="cartimg cursor-pointer flex flex-row items-center	">
            <div className="pl-2">{totalProductPrice} &#8381;</div>

            <Link to="/cart">
              <div>
                {" "}
                <img className="w-8 ml-2" src="img/cart.png" alt="" />
              </div>
            </Link>
            <div className="ml-2 bg-red-500 pl-2 pr-2 p-[5px] rounded-full text-white">
              {totalCount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

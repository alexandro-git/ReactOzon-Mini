import { calcPrice } from "./calcPrice"


export const getProductCartLS = () => {
   const data= localStorage.getItem('cart')
 const totalProductsCart= data? JSON.parse(data):[]
const totalProductPrice=calcPrice(totalProductsCart)

return {
  totalProductPrice,
  totalProductsCart
}

}


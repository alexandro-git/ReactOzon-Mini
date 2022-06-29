import { itemCart } from '../redux/slices/cartSlice'



export const calcPrice = (totalProductsCart:itemCart[]) => {
  return totalProductsCart.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
}

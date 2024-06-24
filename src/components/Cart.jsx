import { useContext } from "react";
import { ShopContext } from "../context";

export default function Cart() {
  const {order, handleCartShow = Function.prototype} = useContext(ShopContext);
  const quantity = order.length;
  return(
    <button className="cart red darken-4 white-text" onClick={handleCartShow}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </button>
  );
}
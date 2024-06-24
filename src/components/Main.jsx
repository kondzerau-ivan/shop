import { useEffect, useContext } from "react";
import { API_KEY, API_URL } from "../config";

import { ShopContext } from "../context";

import Preloader from "./Preloader";
import Products from "./Products";
import Cart from "./Cart";
import CartList from "./CartList";
import Alert from "./Alert";

export default function Main() {
  const { setProducts, loading, order, isCartShow, alertName } =
    useContext(ShopContext);

  useEffect(function getProducts() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured &&
          setProducts(data.featured.filter((e) => e.type === "sparks_song"));
      });
  }, []);

  return (
    <main>
      <div className="container">
        <Cart quantity={order.length} />
        {isCartShow && <CartList />}
        {loading ? <Preloader /> : <Products />}
        {alertName && <Alert />}
      </div>
    </main>
  );
}

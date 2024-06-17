import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";

import Preloader from "./Preloader";
import Products from "./Products";
import Cart from "./Cart";
import CartList from "./CartList";

export default function Main() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isCartShow, setCartShow] = useState(false);

  const addToCart = (product) => {
    const productIndex = order.findIndex(
      (orderProduct) => orderProduct.id === product.id
    );
    if (productIndex < 0) {
      const newProduct = {
        ...product,
        quantity: 1,
      };
      setOrder([...order, newProduct]);
    } else {
      const newOrder = order.map((orderProduct, index) => {
        if (index === productIndex) {
          return {
            ...orderProduct,
            quantity: orderProduct.quantity + 1,
          };
        } else {
          return orderProduct;
        }
      });
      setOrder(newOrder);
    }
  };

  const removeFromCart = (productId) => {
    const newOrder = order.filter((product) => product.id !== productId);
    setOrder(newOrder);
  };

  const incQuantity = (productId) => {
    const newOrder = order.map((product) => {
      if (product.id === productId) {
        const newQuantity = product.quantity + 1;
        return {
          ...product,
          quantity: newQuantity,
        };
      } else {
        return product;
      }
    });
    setOrder(newOrder);
  };

  const decQuantity = (productId) => {
    const newOrder = order.map((product) => {
      if (product.id === productId) {
        const newQuantity = product.quantity - 1;
        return {
          ...product,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return product;
      }
    });
    setOrder(newOrder);
  };

  const handleCartShow = () => {
    setCartShow(!isCartShow);
  };

  useEffect(function getProducts() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setProducts(data.featured.slice(0, 16));
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <div className="container">
        <Cart quantity={order.length} handleCartShow={handleCartShow} />
        {isCartShow && (
          <CartList
            order={order}
            handleCartShow={handleCartShow}
            removeFromCart={removeFromCart}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
          />
        )}
        {loading ? (
          <Preloader />
        ) : (
          <Products products={products} addToCart={addToCart} />
        )}
      </div>
    </main>
  );
}

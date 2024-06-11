import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";

import Preloader from "./Preloader";
import Products from "./Products";
import Cart from "./Cart";

export default function Main() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);

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

  useEffect(function getProducts() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setProducts(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <div className="container">
        <Cart quantity={order.length} />
        {loading ? <Preloader /> : <Products products={products} addToCart={addToCart} />}
      </div>
    </main>
  );
}

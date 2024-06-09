import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";

import Preloader from "./Preloader";
import Products from "./Products";

export default function Main() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
        {loading ? <Preloader /> : <Products products={products} />}
      </div>
    </main>
  );
}

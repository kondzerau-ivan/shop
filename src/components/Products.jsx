import { useContext } from "react";
import { ShopContext } from "../context";
import Product from "./Product";

export default function Products() {
  const { products = [] } = useContext(ShopContext);

  if (!products) return <h2>Nothing foud!</h2>;
  return (
    <div className="products">
      {products.map((product) => (
        <Product key={product.offer} {...product} />
      ))}
    </div>
  );
}

import Product from "./Product";

export default function Products(props) {
  const {products = []} = props;

  if (!products) return <h2>Nothing foud!</h2>
  return(
    <div className="products">
      {products.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}
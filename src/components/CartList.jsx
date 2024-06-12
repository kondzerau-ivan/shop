import CartItem from "./CartItem";

export default function CartList(props) {
  const {order = []} = props; 
  return (
    <ul className="collection">
      <li className="collection-item active">
        Cart
      </li>
      {
        order.length ? order.map(item => <CartItem key={item.id} {...item} />) : <li className="collection-item">Cart is empty!</li>
      }
      <CartItem />
      <li href="#!" className="collection-item active">
        Total:
      </li>
    </ul>
  );
}

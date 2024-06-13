import CartItem from "./CartItem";

export default function CartList(props) {
  const { order = [], handleCartShow = Function.prototype } = props;
  const totalPrice = order.reduce((total, product) => total + product['price'] * product.quantity, 0);
  return (
    <div className="cart-list-wrapper">
      <ul className="collection cart__list">
        <li className="collection-item active red darken-4">Cart</li>
        {order.length ? (
          order.map((item) => <CartItem key={item.id} {...item} />)
        ) : (
          <li className="collection-item">Cart is empty!</li>
        )}
        <li href="#!" className="collection-item active red darken-4">
          <strong>Total: {totalPrice}$</strong>
        </li>
      </ul>
      <i className="material-icons cart-close hoverable" onClick={handleCartShow}>close</i>
    </div>
  );
}

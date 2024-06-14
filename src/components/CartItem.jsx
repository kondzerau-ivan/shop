export default function CartItem(props) {
  const { id, name, price, quantity, removeFromCart = Function.prototype } = props;
  return (
    <li className="collection-item">
      {name} <strong>x{quantity}</strong> = {price}
      <span class="secondary-content" onClick={() => removeFromCart(id)}><i class="material-icons red-text text-darken-4 hoverable cart-item-close">close</i></span>
    </li>
    );
}

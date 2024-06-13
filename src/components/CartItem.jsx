export default function CartItem(props) {
  const { id, name, price, quantity } = props;
  return (
    <li className="collection-item">
      {name} <strong>x{quantity}</strong> = {price}
      <span class="secondary-content"><i class="material-icons red-text text-darken-4 hoverable cart-item-close">close</i></span>
    </li>
    );
}

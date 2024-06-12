export default function CartItem(props) {
  const { id, name, price, quantity } = props;
  return (
    <li className="collection-item">
      {name} x {quantity} = {price}
      <span class="secondary-content"><i class="material-icons">close</i></span>
    </li>
    );
}

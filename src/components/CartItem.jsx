import { useContext } from "react";
import { ShopContext } from "../context";

export default function CartItem(props) {
  const { id, name, price, quantity } = props;

  const { removeFromCart, incQuantity, decQuantity } = useContext(ShopContext);

  return (
    <li className="collection-item">
      {name}{" "}
      <strong>
        <i
          className="material-icons red-text text-darken-4 cart-item__quantity"
          onClick={() => decQuantity(id)}
        >
          remove
        </i>
        x{quantity}
        <i
          className="material-icons red-text text-darken-4 cart-item__quantity"
          onClick={() => incQuantity(id)}
        >
          add
        </i>
      </strong>{" "}
      = {price}
      <span className="secondary-content" onClick={() => removeFromCart(id)}>
        <i className="material-icons red-text text-darken-4 hoverable cart-item-close">
          close
        </i>
      </span>
    </li>
  );
}

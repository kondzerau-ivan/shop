import { createContext, useReducer } from "react";
import reducer from "./reducer";

export const ShopContext = createContext();

const initialState = {
  products: [],
  loading: true,
  order: [],
  isCartShow: false,
  alertName: "",
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.setProducts = (data) => {
    dispatch({ type: "SET_PRODUCTS", payload: data });
  };

  value.addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  value.removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id: productId } });
  };

  value.incQuantity = (productId) => {
    dispatch({ type: "INC_QUANTITY", payload: { id: productId } });
  };

  value.decQuantity = (productId) => {
    dispatch({ type: "DEC_QUANTITY", payload: { id: productId } });
  };

  value.handleCartShow = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  value.closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

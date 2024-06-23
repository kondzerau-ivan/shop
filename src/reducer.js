export default function reducer(state, { type, payload }) {
  switch (type) {
    case 'ADD_TO_CART': {
      const productIndex = state.order.findIndex(
        (orderProduct) => orderProduct.id === payload.id
      );
      let newOrder = null;
      if (productIndex < 0) {
        const newProduct = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newProduct];
      } else {
        newOrder = state.order.map((orderProduct, index) => {
          if (index === productIndex) {
            return {
              ...orderProduct,
              quantity: orderProduct.quantity + 1,
            };
          } else {
            return orderProduct;
          }
        });
      }

      return {
        ...state,
        order: newOrder,
        alertName: payload.name
      }
    }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        order: state.order.filter((product) => product.id !== payload.id)
      }
    case 'INC_QUANTITY':
      return {
        ...state,
        order: state.order.map((product) => {
          if (product.id === payload.id) {
            const newQuantity = product.quantity + 1;
            return {
              ...product,
              quantity: newQuantity,
            };
          } else {
            return product;
          }
        })
      }
    case 'DEC_QUANTITY':
      return {
        ...state,
        order: state.order.map((product) => {
          if (product.id === payload.id) {
            const newQuantity = product.quantity - 1;
            return {
              ...product,
              quantity: newQuantity >= 0 ? newQuantity : 0,
            };
          } else {
            return product;
          }
        })
      }
    case 'TOGGLE_CART':
      return {
        ...state,
        isCartShow: !state.isCartShow
      }
    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: ''
      }
    default:
      return state;
  }
}
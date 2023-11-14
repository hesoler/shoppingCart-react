import { useReducer } from "react";
import { CartContext } from "./CartContext.jsx";
import PropTypes from "prop-types";

const initialState = [];

export const CartProvider = ({ children }) => {
  const addPurchase = (purchase) => {
    purchase.amount = 1;
    const action = {
      type: "[Cart] Add Purchase",
      payload: purchase,
    };
    dispatch(action);
  };

  const removePurchase = (id) => {
    const action = {
      type: "[Cart] Remove Purchase",
      payload: id,
    };
    dispatch(action);
  };

  const increaseAmount = (id) => {
    const action = {
      type: "[Cart] Increase Amount",
      payload: id,
    };
    dispatch(action);
  };

  const decreaseAmount = (id) => {
    const action = {
      type: "[Cart] Decrease Amount",
      payload: id,
    };
    dispatch(action);
  };

  const purchaseReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "[Cart] Add Purchase":
        return [...state, action.payload];

      case "[Cart] Remove Purchase":
        return state.filter((purchase) => purchase.id !== action.payload);

      case "[Cart] Increase Amount":
        return state.map((item) => {
          const amount = item.amount + 1;
          if (item.id === action.payload) return { ...item, amount: amount };

          return item;
        });

      case "[Cart] Decrease Amount":
        return state.map((item) => {
          const amount = item.amount - 1;
          if (item.id === action.payload && item.amount > 1) {
            return { ...item, amount: amount };
          }
          return item;
        });

      default:
        return state;
    }
  };

  const [purchaseList, dispatch] = useReducer(purchaseReducer, initialState);

  return (
    <CartContext.Provider
      value={{
        purchaseList,
        addPurchase,
        removePurchase,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.array.isRequired,
};

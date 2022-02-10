import React from 'react';

export const CartContext = React.createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = React.useState([]);

  const store = {
    items,
    setItems,
  };

  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
}
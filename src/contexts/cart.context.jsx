import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const itemInCart = cartItems.find((item) => item.id == productToAdd.id);

  if (itemInCart) {
    return cartItems.map((item) => {
      if (item.id === itemInCart.id) {
        item.quantity++;
      }
      return item;
    });
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const itemsInCart = cartItems.reduce((acumulator, currentElement) => {
      return acumulator + currentElement.quantity;
    }, 0);
    setCartCount(itemsInCart);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

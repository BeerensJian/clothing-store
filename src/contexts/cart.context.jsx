import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const itemInCart = cartItems.find((item) => item.id === productToAdd.id);

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

const removeCartItem = (cartItems, cartItemToRemove) => {
  const itemInCart = cartItems.find(
    (cardItem) => cardItem.id === cartItemToRemove.id
  );
  if (itemInCart.quantity > 1) {
    return cartItems.map((item) => {
      if (item.id === cartItemToRemove.id)
        return { ...item, quantity: item.quantity - 1 };
      else return item;
    });
  }
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  cartCount: 0,
  removeItemFromCart: () => null,
  deleteItem: () => null,
  totalValue: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const itemsInCart = cartItems.reduce((acumulator, currentElement) => {
      return acumulator + currentElement.quantity;
    }, 0);
    const total = cartItems.reduce((accumulator, current) => {
      return accumulator + current.price * current.quantity;
    }, 0);
    setTotalValue(total);
    setCartCount(itemsInCart);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cardItemtoRemove) => {
    setCartItems(removeCartItem(cartItems, cardItemtoRemove));
  };

  const deleteItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartCount,
        removeItemFromCart,
        deleteItem,
        totalValue,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

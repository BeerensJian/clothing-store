import { createContext, useEffect, useReducer, useState } from "react";

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

const CART_ACTION_TYPES = {
  TOGGLE_CART: "TOGGLE_CART",
  ADD_CART_ITEM: "ADD_CART_ITEM",
  REMOVE_CART_ITEM: "REMOVE_CART_ITEM",
  DELETE_CART_ITEM: "DELETE_CART_ITEM",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_CART:
      console.log("toggled");
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    default:
      break;
  }
};

const initialState = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  totalValue: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { isCartOpen, cartItems, cartCount, totalValue } = state;

  const toggleCart = () => {
    dispatch({ type: CART_ACTION_TYPES.TOGGLE_CART });
  };

  useEffect(() => {
    // * whenever cart items changes update the cartCount and totalValue
    // const itemsInCart = cartItems.reduce((acumulator, currentElement) => {
    //   return acumulator + currentElement.quantity;
    // }, 0);
    // const total = cartItems.reduce((accumulator, current) => {
    //   return accumulator + current.price * current.quantity;
    // }, 0);
    // setTotalValue(total);
    // setCartCount(itemsInCart);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    // setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cardItemtoRemove) => {
    // setCartItems(removeCartItem(cartItems, cardItemtoRemove));
  };

  const deleteItem = (id) => {
    // setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        toggleCart,
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

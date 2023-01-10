import { createContext, useReducer } from "react";

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
  clearItemFromCart: () => null,
  totalValue: 0,
});

const CART_ACTION_TYPES = {
  TOGGLE_CART: "TOGGLE_CART",
  UPDATE_CART_ITEMS: "UPDATE_CART_ITEMS",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_CART:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    case CART_ACTION_TYPES.UPDATE_CART_ITEMS:
      const { newCartItems, cartQuantity, cartTotal } = payload;
      return {
        ...state,
        cartItems: newCartItems,
        cartCount: cartQuantity,
        totalValue: cartTotal,
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

  const updateCartItemsReducer = (newCartItems) => {
    // gets passed the updated array

    // calculate quantity of the items in the cart
    const cartQuantity = newCartItems.reduce((acumulator, currentElement) => {
      return acumulator + currentElement.quantity;
    }, 0);

    //calculate the total value of all items
    const cartTotal = newCartItems.reduce((accumulator, current) => {
      return accumulator + current.price * current.quantity;
    }, 0);

    dispatch({
      type: CART_ACTION_TYPES.UPDATE_CART_ITEMS,
      payload: { newCartItems, cartQuantity, cartTotal },
    });
  };

  const addItemToCart = (productToAdd) => {
    const updatedCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(updatedCartItems);
  };

  const removeItemFromCart = (cardItemtoRemove) => {
    const updatedCartItems = removeCartItem(cartItems, cardItemtoRemove);
    updateCartItemsReducer(updatedCartItems);
  };

  const clearItemFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    updateCartItemsReducer(updatedCartItems);
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
        clearItemFromCart,
        totalValue,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

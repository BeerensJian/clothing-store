import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { CartIconContainer, ItemCount } from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { isCartOpen, toggleCart, cartCount } = useContext(CartContext);

  return (
    <CartIconContainer onClick={() => toggleCart()}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;

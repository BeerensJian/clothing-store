import {
  CheckoutItemContainer,
  ImageContainer,
  ItemDetail,
  Quantity,
  DeleteButton,
} from "./checkout-item.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price, id } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const removeItemHandler = () => removeItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(id);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>

      <ItemDetail>{name}</ItemDetail>
      <Quantity>
        <button className="arrow" onClick={removeItemHandler}>
          &#10094;
        </button>
        <span>{quantity}</span>
        <button className="arrow" onClick={addItemHandler}>
          &#10095;
        </button>
      </Quantity>
      <ItemDetail>{quantity * price + "$"}</ItemDetail>
      <DeleteButton onClick={clearItemHandler}>&#10006;</DeleteButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;

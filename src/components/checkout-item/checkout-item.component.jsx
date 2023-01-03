import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price, id } = cartItem;
  const { addItemToCart, removeItemFromCart, deleteItem } =
    useContext(CartContext);

  const removeItemHandler = () => removeItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const deleteItemHandler = () => deleteItem(id);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>

      <span className="name">{name}</span>
      <div className="quantity">
        <button className="arrow" onClick={removeItemHandler}>
          &#10094;
        </button>
        <span>{quantity}</span>
        <button className="arrow" onClick={addItemHandler}>
          &#10095;
        </button>
      </div>
      <span className="price">{quantity * price + "$"}</span>
      <button className="remove-button" onClick={deleteItemHandler}>
        &#10006;
      </button>
    </div>
  );
};

export default CheckoutItem;

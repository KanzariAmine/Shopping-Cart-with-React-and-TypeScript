import CartItem from "../CartItem/CartItem";
// styles
import { Wrapper } from "./Cart.style";
//Type
import { CardItemType } from "../App";

type Props = {
  cartItems: CardItemType[];
  addToCart: (clickedItem: CardItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart = ({ cartItems, addToCart, removeFromCart }: Props) => {
  const calculateTotal = (items: CardItemType[]) => {
    return items.reduce(
      (ack: number, item) => ack + item.amount * item.price,
      0
    );
  };

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No Item in Cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFormCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};
export default Cart;

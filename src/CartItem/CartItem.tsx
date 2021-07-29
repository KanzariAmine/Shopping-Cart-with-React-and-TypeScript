import Button from "@material-ui/core/Button";
//Types
import { CardItemType } from "../App";
//styles
import { Wrapper } from "./CartItem.style";

type Props = {
  item: CardItemType;
  addToCart: (clickedItem: CardItemType) => void;
  removeFormCart: (id: number) => void;
};

const CartItem = ({ item, addToCart, removeFormCart }: Props): JSX.Element => {
  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div className="information">
          <p>Price: {item.price}</p>
          <p>Total: {(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFormCart(item.id)}
          >
            -
          </Button>
          <p>{item.amount}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(item)}
          >
            +
          </Button>
        </div>
      </div>
      <img src={item.image} alt={item.title} />
    </Wrapper>
  );
};

export default CartItem;

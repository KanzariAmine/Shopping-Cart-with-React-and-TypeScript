import Button from "@material-ui/core/Button";
//Types
import { CardItemType } from "../App";
//Style
import { Wrapper } from "./Item.style";

type Props = {
  item: CardItemType;
  handleAddToCart: (clickedItem: CardItemType) => void;
};

const Item = ({ item, handleAddToCart }: Props): React.ReactElement => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>{item.price}</h3>
        <Button onClick={() => handleAddToCart(item)}>Add To Card</Button>
      </div>
    </Wrapper>
  );
};

export default Item;

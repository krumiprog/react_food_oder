import {
  Delete,
  Description,
  Image,
  Info,
  InputNote,
  InputAmount,
  OderCard,
  Price,
  PriceTotal,
  ColumnRight,
  ColumnLeft,
  Row,
} from './Order.elements';
import { ReactComponent as DeleteIcon } from '../images/DeleteIcon.svg';

const Order = ({ order, removeOrder, addOrderNote }) => {
  const { id, img, description, price, amount, total, note } = order;

  return (
    <OderCard>
      <ColumnLeft>
        <Row>
          <Image src={img} />
          <Info>
            <Description>{description}</Description>
            <Price>$ {price}</Price>
          </Info>
          <InputAmount type="text" value={amount} disabled />
        </Row>
        <Row>
          <InputNote
            type="text"
            value={note}
            onChange={e => addOrderNote(id, e.target.value)}
            placeholder="Order Note..."
          />
        </Row>
      </ColumnLeft>
      <ColumnRight>
        <PriceTotal>$ {total.toFixed(2)}</PriceTotal>
        <Delete onClick={() => removeOrder(order)}>
          <DeleteIcon />
        </Delete>
      </ColumnRight>
    </OderCard>
  );
};

export default Order;

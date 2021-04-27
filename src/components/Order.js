import { useState } from 'react';
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
import Beef from '../images/Beef.png';

const Order = () => {
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');

  const handleClick = () => {};

  return (
    <OderCard>
      <ColumnLeft>
        <Row>
          <Image src={Beef} />
          <Info>
            <Description>Spicy seasoned seafood noodles</Description>
            <Price>$ 2.23</Price>
          </Info>
          <InputAmount
            type="text"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </Row>
        <Row>
          <InputNote
            type="text"
            value={note}
            onChange={e => setNote(e.target.value)}
            placeholder="Order Note..."
          />
        </Row>
      </ColumnLeft>
      <ColumnRight>
        <PriceTotal>$ 4.44</PriceTotal>
        <Delete onClick={handleClick}>
          <DeleteIcon />
        </Delete>
      </ColumnRight>
    </OderCard>
  );
};

export default Order;

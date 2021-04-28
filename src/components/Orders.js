import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNote,
  clearCart,
  removeDish,
  selectCart,
} from '../features/cart/cartSlicer';
import { returnDishes } from '../features/dishes/dishesSlicer';
import {
  Button,
  Footer,
  Header,
  OrdersContainer,
  OrdersList,
  Row,
  Title,
} from './Orders.elements';
import Order from './Order';

const Orders = () => {
  const [total, setTotal] = useState(0);

  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  useEffect(() => {
    setTotal(cart.reduce((prev, cur) => prev + cur.total, 0));
  }, [cart]);

  const removeOrder = ({ id, amount }) => {
    dispatch(removeDish(id));
    dispatch(returnDishes({ id, amount }));
  };

  const addOrderNote = (id, note) => {
    dispatch(addNote({ id, note }));
  };

  const handleClick = () => {
    dispatch(clearCart());
  };

  return (
    <OrdersContainer>
      <Title>Orders</Title>
      <Header>
        <div>Item</div>
        <div>Qty</div>
        <div>Price</div>
      </Header>
      <OrdersList>
        {cart.map(order => (
          <Order
            key={order.id}
            order={order}
            removeOrder={removeOrder}
            addOrderNote={addOrderNote}
          />
        ))}
      </OrdersList>
      <Footer>
        <Row>
          <div>Sub total</div>
          <div>$ {total.toFixed(2)}</div>
        </Row>
        <Button onClick={handleClick}>Payment</Button>
      </Footer>
    </OrdersContainer>
  );
};

export default Orders;

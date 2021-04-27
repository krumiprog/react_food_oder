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
  const handleClick = () => {};

  return (
    <OrdersContainer>
      <Title>Orders</Title>
      <Header>
        <div>Item</div>
        <div>Qty</div>
        <div>Price</div>
      </Header>
      <OrdersList>
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
      </OrdersList>
      <Footer>
        <Row>
          <div>Sub total</div>
          <div>$ 21,03</div>
        </Row>
        <Button onClick={handleClick}>Continue to Payment</Button>
      </Footer>
    </OrdersContainer>
  );
};

export default Orders;

import { useDispatch, useSelector } from 'react-redux';
import {
  decrementAvailable,
  selectDishes,
} from '../features/dishes/dishesSlicer';
import { addDish } from '../features/cart/cartSlicer';
import { CardsContainer } from './Cards.elements';
import Card from './Card';

const Cards = () => {
  const dishes = useSelector(selectDishes);
  const dispatch = useDispatch();

  const buyDish = item => {
    const { id, img, description, price } = item;
    dispatch(decrementAvailable(id));
    dispatch(addDish({ id, img, description, price }));
  };

  return (
    <CardsContainer>
      {dishes.map(item => (
        <Card key={item.id} item={item} buyDish={buyDish} />
      ))}
    </CardsContainer>
  );
};

export default Cards;

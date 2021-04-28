import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrementAvailable,
  selectDishes,
} from '../features/dishes/dishesSlicer';
import { addDish } from '../features/cart/cartSlicer';
import { CardsContainer } from './Cards.elements';
import Card from './Card';

const Cards = ({ searchWord }) => {
  const dishes = useSelector(selectDishes);
  const dispatch = useDispatch();

  const [cards, setCards] = useState(dishes);

  useEffect(() => {
    if (!searchWord) {
      setCards(dishes);
    } else {
      setCards(
        dishes.filter(dish =>
          dish.description.toLowerCase().includes(searchWord)
        )
      );
    }
  }, [dishes, searchWord]);

  const buyDish = item => {
    const { id, img, description, price } = item;
    dispatch(decrementAvailable(id));
    dispatch(addDish({ id, img, description, price }));
  };

  return (
    <CardsContainer>
      {cards.map(item => (
        <Card key={item.id} item={item} buyDish={buyDish} />
      ))}
    </CardsContainer>
  );
};

export default Cards;

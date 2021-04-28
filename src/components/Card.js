import {
  Amount,
  CardContent,
  Description,
  Image,
  Price,
} from './Card.elements';

const Card = ({ item, buyDish }) => {
  const { description, img, price, available } = item;

  const handleClick = () => {
    if (available === 0) {
      return;
    }
    buyDish(item);
  };

  return (
    <CardContent onClick={handleClick}>
      <Image src={img} alt="dish" />
      <Description>{description}</Description>
      <Price>$ {price}</Price>
      <Amount>{available} Bowls available</Amount>
    </CardContent>
  );
};

export default Card;

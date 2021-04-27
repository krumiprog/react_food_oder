import {
  Amount,
  CardContent,
  Description,
  Image,
  Price,
} from './Card.elements';

import Beef from '../images/Beef.png';

const Card = () => {
  return (
    <CardContent>
      <Image src={Beef} alt="dish" />
      <Description>Spicy seasoned seafood noodles</Description>
      <Price>$ 2.29</Price>
      <Amount>20 Bowls available</Amount>
    </CardContent>
  );
};

export default Card;

import { useState } from 'react';
import Cards from '../components/Cards';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Orders from '../components/Orders';
import { Container } from '../globalStyles';
import { HomeContainer, Title } from './Home.elements';

const categories = ['Hot Dishes', 'Cold Dishes', 'Soup', 'Grill', 'Dessert'];

const Home = () => {
  const [searchWord, setSearchWord] = useState('');

  return (
    <Container>
      <HomeContainer>
        <Header setSearchWord={setSearchWord} />
        <Categories categories={categories} />
        <Title>Choose Dishes</Title>
        <Cards searchWord={searchWord} />
      </HomeContainer>
      <Orders />
    </Container>
  );
};

export default Home;

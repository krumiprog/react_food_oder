import Cards from '../components/Cards';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Orders from '../components/Orders';
import { Container } from '../globalStyles';
import { HomeContainer, Title } from './Home.elements';

const Home = () => {
  return (
    <Container>
      <HomeContainer>
        <Header />
        <Categories categories={['One', 'Two', 'Three']} />
        <Title>Choose Dishes</Title>
        <Cards />
      </HomeContainer>
      <Orders />
    </Container>
  );
};

export default Home;

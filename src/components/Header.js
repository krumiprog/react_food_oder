import { useState } from 'react';
import Moment from 'react-moment';
import {
  HeaderContainer,
  Input,
  SearchBlock,
  SearchButton,
  Title,
  Today,
} from './Header.elements';
import { ReactComponent as SearchIcon } from '../images/SearchIcon.svg';

const Header = () => {
  const [search, setSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setSearch('');
  };

  return (
    <HeaderContainer>
      <div>
        <Title>Food Order</Title>
        <Today>
          <Moment format="dddd, D MMM YYYY" withTitle>
            {new Date()}
          </Moment>
        </Today>
      </div>
      <SearchBlock onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <SearchIcon />
        </SearchButton>
        <Input
          type="text"
          placeholder="Search for food..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </SearchBlock>
    </HeaderContainer>
  );
};

export default Header;

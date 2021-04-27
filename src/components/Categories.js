import { Category, Content } from './Categories.elements';

const Categories = ({ categories }) => {
  return (
    <Content>
      {categories.map(category => (
        <Category>{category}</Category>
      ))}
    </Content>
  );
};

export default Categories;

import { Category, Content } from './Categories.elements';

const Categories = ({ categories }) => {
  return (
    <Content>
      {categories.map((category, index) => (
        <Category key={index}>{category}</Category>
      ))}
    </Content>
  );
};

export default Categories;

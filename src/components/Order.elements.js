import styled from 'styled-components';

export const OderCard = styled.div`
  margin-bottom: 24px;
  display: flex;
  gap: 10px;
`;

export const ColumnLeft = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ColumnRight = styled.div`
  width: 55px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Row = styled.div`
  height: 48px;
  display: flex;
  gap: 5px;
`;

export const Image = styled.img`
  align-self: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

export const Info = styled.div`
  flex-grow: 1;
  align-self: center;
  display: flex;
  flex-direction: column;
`;

export const Description = styled.div`
  max-width: 185px;
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  color: #fff;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Price = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 140%;
  color: #abbbc2;
`;

export const Input = styled.input`
  padding: 14px;
  color: #fff;
  background-color: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
  outline: none;
`;

export const InputAmount = styled(Input)`
  width: 48px;
  text-align: center;
`;

export const InputNote = styled(Input)`
  width: 100%;
`;

export const PriceTotal = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: #fff;
`;

export const Delete = styled.button`
  height: 48px;
  width: 48px;
  color: #ea7c69;
  background-color: transparent;
  border: 1px solid #ea7c69;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: #ea7c69;
  }

  & svg {
    path {
      fill: #ea7c69;
      transition: fill 0.5s;
    }
  }

  &:hover svg {
    path {
      fill: #fff;
    }
  }
`;

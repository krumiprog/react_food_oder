import styled from 'styled-components';

export const HeaderContainer = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 4px;
  font-size: 28px;
  font-weight: 600;
  line-height: 140%;
  color: #fff;
`;

export const Today = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  color: #e0e6e9;
`;

export const SearchBlock = styled.form`
  padding: 14px;
  display: flex;
  align-items: center;
  background-color: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const Input = styled.input`
  margin-left: 8px;
  width: 164px;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  color: #abbbc2;
  background-color: transparent;
  border: none;
  outline: none;
`;

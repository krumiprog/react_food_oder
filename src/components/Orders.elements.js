import styled from 'styled-components';

export const OrdersContainer = styled.div`
  padding: 24px;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 409px;
  display: flex;
  flex-direction: column;
  background-color: #1f1d2b;
  border-radius: 10px 0 0 10px;
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #fff;
`;

export const Header = styled.div`
  margin-bottom: 24px;
  padding-bottom: 24px;
  display: flex;
  gap: 10px;
  color: #fff;
  border-bottom: 1px solid #393c49;

  & > :first-child {
    flex-grow: 1;
  }

  & > :not(:first-child) {
    width: 55px;
    text-align: center;
  }
`;

export const OrdersList = styled.div`
  flex-grow: 1;
  overflow: scroll;
  overflow-x: hidden;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

export const Footer = styled.div`
  padding-top: 24px;
  border-top: 1px solid #393c49;
`;

export const Row = styled.div`
  margin-bottom: 42px;
  display: flex;
  justify-content: space-between;

  & > :first-child {
    font-size: 14px;
    line-height: 140%;
    font-weight: 400;
    color: #abbbc2;
  }

  & > :not(:first-child) {
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    color: #fff;
  }
`;

export const Button = styled.button`
  padding: 14px;
  width: 100%;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  text-align: center;
  color: #fff;
  background-color: #ea7c69;
  border-radius: 8px;
  border: none;
  outline: none;
  box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.3);
  cursor: pointer;

  &:hover {
    box-shadow: none;
  }
`;

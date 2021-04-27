import styled from 'styled-components';

export const Content = styled.div`
  margin-bottom: 24px;
  display: flex;
  border-bottom: 1px solid #393c49;
`;

export const Category = styled.div`
  position: relative;
  padding-bottom: 13px;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #fff;
  cursor: pointer;
  transition: 0.5s;

  &:not(:last-child) {
    margin-right: 32px;
  }

  &:hover {
    color: #ea7c69;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 50%;
    height: 2px;
    width: 0;
    background-color: #ea7c69;
    transition: 0.5s;
  }

  &:hover::after {
    left: 0;
    width: 100%;
  }
`;

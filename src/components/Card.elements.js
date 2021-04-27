import styled from 'styled-components';

export const CardContent = styled.div`
  position: relative;
  margin-top: 58px;
  padding: 114px 24px 24px;
  width: 192px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 14px;
  background-color: #1f1d2b;
  border-radius: 16px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transform: translateZ(1px) scale(1.05);
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -36px);
  width: 132px;
  height: 132px;
  border-radius: 50%;
`;

export const Description = styled.div`
  margin-bottom: 8px;
  font-weight: 500;
  line-height: 130%;
  color: #fff;
`;

export const Price = styled.div`
  margin-bottom: 8px;
  font-weight: 400;
  line-height: 140%;
  color: #fff;
`;

export const Amount = styled.div`
  font-weight: 400;
  line-height: 140%;
  color: #abbbc2;
`;

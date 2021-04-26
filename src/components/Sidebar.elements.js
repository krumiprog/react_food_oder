import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 104px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1f1d2b;
  border-radius: 0 10px 10px 0;
`;

export const Logo = styled.div`
  margin: 24px 0 16px;
  height: 56px;
  width: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #543c3b;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const LogoImg = styled.img``;

export const Nav = styled.nav`
  width: 100%;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
`;

export const NavItem = styled.li`
  width: 100%;
`;

export const NavLinkStyled = styled(NavLink)`
  position: relative;
  height: 92px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 56px;
    height: 56px;
    transform: translate(-50%, -50%);
    background-color: #ea7c69;
    opacity: 0;
    box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.32);
    border-radius: 8px;
    z-index: -1;
    transition: opacity 0.7s;
  }

  &:hover::before {
    opacity: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 78px;
    height: 78px;
    transform: translate(-50%, -50%);
    background-color: #252836;
    opacity: 0;
    border-radius: 12px;
    z-index: -2;
    transition: opacity 0.7s;
  }

  &:hover::after {
    opacity: 1;
  }

  & svg {
    path {
      fill: #ea7c69;
      transition: fill 0.7s;
    }
  }

  &:hover svg {
    path {
      fill: #fff;
    }
  }

  &.active {
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 56px;
      height: 56px;
      transform: translate(-50%, -50%);
      background-color: #ea7c69;
      opacity: 1;
      box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.32);
      border-radius: 8px;
      z-index: -1;
    }

    & svg {
    path {
      fill: #fff;
    }
  }
`;

import {
  SidebarContainer,
  Logo,
  LogoImg,
  Nav,
  NavList,
  NavItem,
  NavLinkStyled,
} from './Sidebar.elements';
import { ReactComponent as DashboardIcon } from '../images/DashboardIcon.svg';
import { ReactComponent as HomeIcon } from '../images/HomeIcon.svg';
import { ReactComponent as SettingsIcon } from '../images/SettingsIcon.svg';
import LogoIcon from '../images/LogoIcon.png';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo>
        <LogoImg src={LogoIcon} alt="logo" />
      </Logo>
      <Nav>
        <NavList>
          <NavItem>
            <NavLinkStyled to="/" exact>
              <HomeIcon />
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/dashboard">
              <DashboardIcon />
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/settings">
              <SettingsIcon />
            </NavLinkStyled>
          </NavItem>
        </NavList>
      </Nav>
    </SidebarContainer>
  );
};

export default Sidebar;

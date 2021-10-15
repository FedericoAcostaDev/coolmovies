import React from 'react';
import { IconType } from 'react-icons';
import { NavbarContainer, Nav, NavList, NavItem, NavLink, Logo } from './styles';

interface NavbarProps {
  Icon?: IconType,
  title?: string,
  items: Array<{
    name: string,
    path: string
  }>
}

const Navbar: React.FC<NavbarProps> = ({ Icon, title, items }) => {
  const renderIcon = () => Icon && <Icon />;

  const renderLogo = () => (Icon || title) && (
    <Logo>
      { renderIcon() }
      { title }
    </ Logo>
  );

  const renderLinks: Function = () => items.map(({ name, path }) => (
    <NavItem>
      <NavLink to={ path }>
        { name }
      </ NavLink>
    </NavItem>
  ));

  return (
    <NavbarContainer>
      { renderLogo() }
      <Nav>
        <NavList>
          { renderLinks() }
        </NavList>
      </Nav>
    </NavbarContainer>
  )
}

export default Navbar;
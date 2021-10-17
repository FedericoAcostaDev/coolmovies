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
      {renderIcon()}
      {title}
    </ Logo>
  );

  return (
    <NavbarContainer>
      {renderLogo()}
      <Nav>
        <NavList>
          {items.map(({ name, path }, index) => (
            <NavItem key={index}>
              <NavLink to={path}>
                {name}
              </ NavLink>
            </NavItem>
          ))}
        </NavList>
      </Nav>
    </NavbarContainer>
  )
}

export default Navbar;
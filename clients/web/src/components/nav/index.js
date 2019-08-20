import React from 'react';
import { Root, NavLink, NavItem, IconContainer } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <Root>
      <NavItem>
        <NavLink to="/">
          <IconContainer>
            <FontAwesomeIcon icon={faTachometerAlt} />
          </IconContainer>
          Dashboard
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/about">
          <IconContainer>
            <FontAwesomeIcon icon={faAddressCard} />
          </IconContainer>
          About
        </NavLink>
      </NavItem>
    </Root>
  );
};

export default Nav;

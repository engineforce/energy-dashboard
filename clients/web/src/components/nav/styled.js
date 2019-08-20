import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Root = styled.ul`
  height: 100%;
  flex: 1;
  list-style: none;
  background-image: linear-gradient(to right, #141e30, #243b55);
  text-align: left;
  padding: 10px;
  line-height: 2;
`;

export const NavItem = styled.li`
  @media all and (min-width: 800px) {
    height: 50px;
  }
`;

export const IconContainer = styled.span`
  margin-right: 10px;
`;

export const NavLink = styled(Link)`
  display: block;
  color: white;
  min-width: 180px;
  border-radius: 5px;

  &:hover {
    background-color: #243b55;
  }

  @media all and (min-width: 800px) {
    padding: 5px 20px;
  }
`;

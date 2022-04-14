import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Cart from './Cart';

function Navbar() {
  return (
    <Nav>
      <Logo>Johar</Logo>
      <NavLink>
        <NavList>
          <Link style={{textDecoration: 'none', color: '#ffff'}} to='/'>Home</Link>
          <Link style={{textDecoration: 'none', color: '#ffff'}} to='/product'>Product</Link>
          <Link style={{textDecoration: 'none', color: '#ffff'}} to='/detail'>Detail</Link>
          <Link style={{textDecoration: 'none', color: '#ffff'}} to='/cart'>Cart</Link>
        </NavList>
      </NavLink>
     <Cart />
    </Nav>
  );
}

export default Navbar;

const Logo = styled.p`
    font-size: 20px;
    color: #ffff;
`

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-bottom: 30px;
  background-color: blueviolet;
`;

const NavLink = styled.ul`
    list-style-type: none;
`
// const Link = styled.Link`
//     text-decoration: none;
// `

const NavList = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
`;



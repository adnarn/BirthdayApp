// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  background-color: transparent;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  width: 100%;
  margin-top: -1rem;
  margin-bottom: 3rem;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
    
  }
`;

const NavBar = () => {
  return (
    <NavbarContainer>
      <Logo>Birthday Reminder</Logo>
      <NavLinks>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default NavBar;

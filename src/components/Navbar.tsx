import React from 'react';
// import Link from 'react-dom-router'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//styled components

const MainNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgb(220, 220, 220);
`;

const NavbarLink = styled(Link)`
  margin-left: 30px;

  padding: 5px;
`;

const NavTitle = styled.h2``;

//main component
const Navbar: React.FC = () => {
  return (
    <MainNavbar>
      <NavTitle>Feedback</NavTitle>
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/feedbacks">My Feedbacks</NavbarLink>
    </MainNavbar>
  );
};

export default Navbar;

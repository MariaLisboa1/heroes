import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import logo from '../../assets/images/logo.png';

function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Heroes" />
      </Link>
    </Container>
  );
}

export default Header;

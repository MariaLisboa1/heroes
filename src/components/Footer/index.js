import React from 'react';

import { Container, Copyright } from './styles';

export default function Footer() {
  return (
    <Container>
      <Copyright>
        © 2020 Copyright:{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.marvel.com/"
        >
          https://www.marvel.com/
        </a>
      </Copyright>
    </Container>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function NotFoundPage() {
  return (
    <Container>
      <h1>Ops!</h1>
      <h2>404 Página Não Encontrada</h2>
      <Link to="/">Voltar para o inicio</Link>
    </Container>
  );
}

export default NotFoundPage;

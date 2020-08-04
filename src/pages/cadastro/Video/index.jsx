import React from 'react';
import PageDefault from '../../../components/PageDefault';
import {Link} from 'react-router-dom';

export default props => (
  <PageDefault>
    <h1>Cadastro de vídeo</h1>
    <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
  </PageDefault>
);
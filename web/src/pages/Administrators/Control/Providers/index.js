import React from 'react';

import { Container } from './styles';

import Header from '../../../../components/Administrators/Header';
import DataTable from './Table';

export default function Providers() {
  return (
    <>
      <Header />

      <Container>
        <DataTable />
      </Container>
    </>
  );
}

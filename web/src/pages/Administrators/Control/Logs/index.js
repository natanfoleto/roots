import React from 'react';

import { Container } from '../../../../styles/Administrators/control';

import Header from '../../../../components/Administrators/Header';
import DataTable from './Table';

export default function Logs() {
  return (
    <>
      <Header />

      <Container>
        <DataTable />
      </Container>
    </>
  );
}

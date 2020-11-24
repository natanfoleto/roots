import React from 'react';

import { Container, Menu } from '../../../../styles/Administrators/control';

import Header from '../../../../components/Administrators/Header';
import DataTable from './Table';

export default function Clients() {
  return (
    <>
      <Header />

      <Container>
        <Menu>

        </Menu>

        <DataTable />
      </Container>
    </>
  );
}

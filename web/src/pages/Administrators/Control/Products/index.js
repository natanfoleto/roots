import React from 'react';

import { Container, Menu } from '../../../../styles/Administrators/control';

import AddIcon from '@material-ui/icons/Add';

import Header from '../../../../components/Administrators/Header';
import DataTable from './Table';

export default function Products() {
  return (
    <>
      <Header />

      <Container>
        <Menu>
          <button>
            <AddIcon />
          </button>
        </Menu>

        <DataTable />
      </Container>
    </>
  );
}

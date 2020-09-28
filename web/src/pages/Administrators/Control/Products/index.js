import React from 'react';

import { Container, Menu } from '../../../../styles/Administrators/control';

import history from '../../../../services/history';

import AddIcon from '@material-ui/icons/Add';

import Header from '../../../../components/Administrators/Header';
import DataTable from './Table';

export default function Products() {

  function handleAdd() {
    history.push('/product/form');
  }

  return (
    <>
      <Header />

      <Container>
        <Menu>
          <button onClick={handleAdd}>
            <AddIcon />
          </button>
        </Menu>

        <DataTable />
      </Container>
    </>
  );
}

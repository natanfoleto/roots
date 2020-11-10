import React from 'react';

import { Container, Menu } from '../../../../styles/Administrators/control';

import IconAdd from '@material-ui/icons/Add';

import history from '../../../../services/history';

import Header from '../../../../components/Administrators/Header';
import DataTable from './Table';

export default function Categories() {
  function handleAdd() {
    history.push('/categorie/form');
  }

  return (
    <>
      <Header />

      <Container>
        <Menu>
          <button onClick={handleAdd}>
            <IconAdd />
          </button>
        </Menu>

        <DataTable />
      </Container>
    </>
  );
}

import React, { useState, useEffect } from 'react';

import MaterialTable from 'material-table';

import history from '../../../../../services/history';

import MenuOpenIcon from '@material-ui/icons/MenuOpen';

import { Container, Button } from '../../../../../styles/Administrators/table.js';

import api from '../../../../../services/api';

export default function Table() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/categories');

      setCategories(response.data);
    }

    loadProducts();
  }, []);

  const columns = [
    { title: 'ID', field: 'id' },
    { title: 'Nome', field: 'nome' },
  ];

  return (
    <>
      <Container>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

        <MaterialTable
          title="Categorias"
          columns={columns}
          data={categories}
          actions={[
            {
              icon: 'none',
              tooltip: 'none',
              onClick: (event, rowData) => {
                history.push('/categorie/form', { data: rowData });
              }
            }
          ]}
          components={{
            Action: props => (
              <button
                onClick={(event) => props.action.onClick(event, props.data)}
                color="primary"
                variant="contained"
                style={Button}
                size="small"
              >
                <MenuOpenIcon />
              </button>
            ),
          }}
          options={{
            actionsColumnIndex: -1,
            exportButton: true
          }}
        />
      </Container>
    </>
  );
}

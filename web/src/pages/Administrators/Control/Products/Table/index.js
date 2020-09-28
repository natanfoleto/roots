import React, { useState, useEffect } from 'react';

import MaterialTable from 'material-table';

import history from '../../../../../services/history';

import MenuOpenIcon from '@material-ui/icons/MenuOpen';

import { Container, Button } from '../../../../../styles/Administrators/table.js';

import api from '../../../../../services/api';

export default function Table() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');
  
      setProducts(response.data);
    }

    loadProducts();
  }, []);

  const columns = [
    { title: 'ID', field: 'id' },
    { title: 'Nome', field: 'nome' },
    { title: 'Categoria', field: 'categoria' },
    { title: 'Valor', field: 'valor' },
    { title: 'Atualizado Em', field: 'updatedAt' },
    { title: 'Ativo', field: 'ativo' },
  ];

  return (
    <>
      <Container>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>

        <MaterialTable
          title="Produtos"
          columns={columns}
          data={products}
          actions={[
            {
              icon: 'none',
              tooltip: 'none',
              onClick: (event, rowData) => {
                history.push('/product/form', {data: rowData});
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
            actionsColumnIndex: -1
          }}
        />
      </Container>
    </>
  );
}

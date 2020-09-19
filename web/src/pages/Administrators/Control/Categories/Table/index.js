import React from 'react';

import MaterialTable from 'material-table';

import MenuOpenIcon from '@material-ui/icons/MenuOpen';

import { Container, Button } from '../../../../../styles/Administrators/table.js';

export default function Table() {
  const columns = [
    { title: 'ID', field: 'id' },
    { title: 'Nome', field: 'nome' },
    { title: 'Criado Em', field: 'created_at' },
    { title: 'Atualizado Em', field: 'update_at' }
  ];

  const data = [
    { id: 1, nome: 'Bermudas', created_at: '08/09/2020', update_at: '08/09/2020'},
    { id: 2, nome: 'Moletons', created_at: '08/09/2020', update_at: '08/09/2020'},
    { id: 3, nome: 'Edredons', created_at: '08/09/2020', update_at: '08/09/2020'},
    { id: 4, nome: 'Sapatos', created_at: '08/09/2020', update_at: '08/09/2020'},
    { id: 5, nome: 'Acessórios', created_at: '08/09/2020', update_at: '08/09/2020'},
    { id: 6, nome: 'Calças', created_at: '08/09/2020', update_at: '08/09/2020'},
    { id: 7, nome: 'Intimos', created_at: '08/09/2020', update_at: '08/09/2020'},
  ];

  return (
    <>
      <Container>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>

        <MaterialTable
          title="Categorias"
          columns={columns}
          data={data}
          actions={[
            {
              icon: 'none',
              tooltip: 'none',
              onClick: (event, rowData) => {
                alert(rowData.nome);
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

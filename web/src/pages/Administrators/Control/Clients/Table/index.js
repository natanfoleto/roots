import React from 'react';

import MaterialTable from 'material-table';

import { Container } from './styles.js';

export default function Table() {
  const columns = [
    { title: 'ID', field: 'id' },
    { title: 'Nome', field: 'name' },
  ];

  const data = [
    { id: 1, name: 'Natan Foleto'},
    { id: 2, name: 'Matheus Finoto'},
    { id: 3, name: 'Vini Faleiros'},
    { id: 3, name: 'Vini Faleiros'},
    { id: 3, name: 'Vini Faleiros'},
    { id: 3, name: 'Vini Faleiros'},
    { id: 3, name: 'Vini Faleiros'},
    { id: 3, name: 'Vini Faleiros'},
    { id: 3, name: 'Vini Faleiros'},
    { id: 3, name: 'Vini Faleiros'},
    { id: 3, name: 'Vini Faleiros'},
    { id: 3, name: 'Vini Faleiros'},
    { id: 3, name: 'Vini Faleiros'},
    { id: 3, name: 'Vini Faleiros'},
    { id: 3, name: 'Vini Faleiros'},
  ];

  return (
    <>
      <Container>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <MaterialTable
          title="Produtos"
          columns={columns}
          data={data}
          actions={[
            {
              icon: 'save',
              tooltip: 'Save User',
              onClick: (event, rowData) => alert(rowData.name)
            }
          ]}
          components={{
            Action: props => (
              <button
                onClick={(event) => props.action.onClick(event, props.data)}
                color="primary"
                variant="contained"
                style={{textTransform: 'none'}}
                size="small"
              >
                My Button
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

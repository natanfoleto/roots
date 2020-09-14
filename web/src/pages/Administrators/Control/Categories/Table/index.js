import React from 'react';

import MaterialTable from 'material-table';

import MenuOpenIcon from '@material-ui/icons/MenuOpen';

import { Container, Button } from '../../../../../styles/table.js';

export default function Table() {
  const columns = [
    { title: 'ID', field: 'id' },
    { title: 'Nome', field: 'nome' },
    { title: 'CPF', field: 'cpf' },
    { title: 'Data Nasc', field: 'data_nasc' },
    { title: 'E-mail', field: 'email' },
    { title: 'Criado Em', field: 'created_at' },
    { title: 'Atualizado Em', field: 'update_at' },
    { title: 'Ativo', field: 'ativo' },
  ];

  const data = [
    { id: 1, nome: 'Natan Foleto', cpf: '48092926816', data_nasc: '10/07/1999', email: 'natanfoleto@hotmail.com', created_at: '08/09/2020', update_at: '08/09/2020', ativo: 'S'},
    { id: 2, nome: 'Matheus Finoto', cpf: '48092926816', data_nasc: '10/07/1999', email: 'natanfoleto@hotmail.com', created_at: '08/09/2020', update_at: '08/09/2020', ativo: 'S'},
    { id: 3, nome: 'Vini Faleiros', cpf: '48092926816', data_nasc: '10/07/1999', email: 'natanfoleto@hotmail.com', created_at: '08/09/2020', update_at: '08/09/2020', ativo: 'S'},
    { id: 4, nome: 'Pedro Cesar', cpf: '48092926816', data_nasc: '10/07/1999', email: 'natanfoleto@hotmail.com', created_at: '08/09/2020', update_at: '08/09/2020', ativo: 'S'},
    { id: 5, nome: 'Reinaldo Silva', cpf: '48092926816', data_nasc: '10/07/1999', email: 'natanfoleto@hotmail.com', created_at: '08/09/2020', update_at: '08/09/2020', ativo: 'S'},
    { id: 6, nome: 'Cesar Ferreira', cpf: '48092926816', data_nasc: '10/07/1999', email: 'natanfoleto@hotmail.com', created_at: '08/09/2020', update_at: '08/09/2020', ativo: 'S'},
    { id: 7, nome: 'Aline Matos', cpf: '48092926816', data_nasc: '10/07/1999', email: 'natanfoleto@hotmail.com', created_at: '08/09/2020', update_at: '08/09/2020', ativo: 'S'},
    { id: 8, nome: 'Luís Guilherme', cpf: '48092926816', data_nasc: '10/07/1999', email: 'natanfoleto@hotmail.com', created_at: '08/09/2020', update_at: '08/09/2020', ativo: 'S'},
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

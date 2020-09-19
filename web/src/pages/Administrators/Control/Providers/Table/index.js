import React from 'react';

import MaterialTable from 'material-table';

import MenuOpenIcon from '@material-ui/icons/MenuOpen';

import { Container, Button } from '../../../../../styles/Administrators/table.js';

export default function Table() {
  const columns = [
    { title: 'ID', field: 'id' },
    { title: 'Nome', field: 'nome' },
    { title: 'CNPJ', field: 'cnpj' },
    { title: 'Data Nasc', field: 'data_nasc' },
    { title: 'E-mail', field: 'email' },
    { title: 'Telefone', field: 'telefone' },
    { title: 'Criado Em', field: 'created_at' },
    { title: 'Atualizado Em', field: 'update_at' },
    { title: 'Ativo', field: 'ativo' },
  ];

  const data = [
    { id: 1, nome: 'Natan Foleto', cnpj: '48092926816', data_nasc: '10/07/1999', email: 'natanfoleto@hotmail.com', telefone: '17992424418', created_at: '08/09/2020', update_at: '08/09/2020', ativo: 'S'},
    { id: 2, nome: 'Matheus Finoto', cnpj: '48092926816', data_nasc: '10/07/1999', email: 'natanfoleto@hotmail.com', telefone: '17992424418', created_at: '08/09/2020', update_at: '08/09/2020', ativo: 'S'},
    { id: 3, nome: 'Vini Faleiros', cnpj: '48092926816', data_nasc: '10/07/1999', email: 'natanfoleto@hotmail.com', telefone: '17992424418', created_at: '08/09/2020', update_at: '08/09/2020', ativo: 'S'},
    { id: 4, nome: 'Pedro Cesar', cnpj: '48092926816', data_nasc: '10/07/1999', email: 'natanfoleto@hotmail.com', telefone: '17992424418', created_at: '08/09/2020', update_at: '08/09/2020', ativo: 'S'},
    { id: 5, nome: 'Reinaldo Silva', cnpj: '48092926816', data_nasc: '10/07/1999', email: 'natanfoleto@hotmail.com', telefone: '17992424418', created_at: '08/09/2020', update_at: '08/09/2020', ativo: 'S'},
    { id: 6, nome: 'Cesar Ferreira', cnpj: '48092926816', data_nasc: '10/07/1999', email: 'natanfoleto@hotmail.com', telefone: '17992424418', created_at: '08/09/2020', update_at: '08/09/2020', ativo: 'S'},
    { id: 7, nome: 'Aline Matos', cnpj: '48092926816', data_nasc: '10/07/1999', email: 'natanfoleto@hotmail.com', telefone: '17992424418', created_at: '08/09/2020', update_at: '08/09/2020', ativo: 'S'},
    { id: 8, nome: 'Luís Guilherme', cnpj: '48092926816', data_nasc: '10/07/1999', email: 'natanfoleto@hotmail.com', telefone: '17992424418', created_at: '08/09/2020', update_at: '08/09/2020', ativo: 'S'},
  ];

  return (
    <>
      <Container>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>

        <MaterialTable
          title="Fornecedores"
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

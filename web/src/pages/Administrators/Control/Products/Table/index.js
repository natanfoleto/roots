import React from 'react';

import MaterialTable from 'material-table';

import MenuOpenIcon from '@material-ui/icons/MenuOpen';

import { Container, Button } from '../../../../../styles/Administrators/table.js';

export default function Table() {
  const columns = [
    { title: 'ID', field: 'id' },
    { title: 'Nome', field: 'nome' },
    { title: 'Categoria', field: 'categoria' },
    { title: 'Valor', field: 'valor' },
    { title: 'Criado Em', field: 'created_at' },
    { title: 'Atualizado Em', field: 'update_at' },
    { title: 'Ativo', field: 'ativo' },
  ];

  const data = [
    { id: 1, nome: 'Bermuda Jeans', categoria: 'Bermudas', valor: 'R$ 100,00', created_at: '08/09/2020', update_at: '08/09/2020', ativo: 'S'},
    { id: 2, nome: 'Camiseta M', categoria: 'Bermudas', valor: 'R$ 100,00', created_at: '08/09/2020', update_at: '08/09/2020', ativo: 'S'},
    { id: 3, nome: 'Regata Azul', categoria: 'Bermudas', valor: 'R$ 100,00', created_at: '08/09/2020', update_at: '08/09/2020', ativo: 'S'},
    { id: 4, nome: 'Moletom Preto', categoria: 'Bermudas', valor: 'R$ 100,00', created_at: '08/09/2020', update_at: '08/09/2020', ativo: 'S'},
    { id: 5, nome: 'Jaqueta Jeans', categoria: 'Bermudas', valor: 'R$ 100,00', created_at: '08/09/2020', update_at: '08/09/2020', ativo: 'S'},
    { id: 6, nome: 'Tenis Nike', categoria: 'Bermudas', valor: 'R$ 100,00', created_at: '08/09/2020', update_at: '08/09/2020', ativo: 'S'},
    { id: 7, nome: 'Chileno Havaianas', categoria: 'Bermudas', valor: 'R$ 100,00', created_at: '08/09/2020', update_at: '08/09/2020', ativo: 'S'},
    { id: 8, nome: 'Brinco de Lua', categoria: 'Bermudas', valor: 'R$ 100,00', created_at: '08/09/2020', update_at: '08/09/2020', ativo: 'S'},
  ];

  return (
    <>
      <Container>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>

        <MaterialTable
          title="Produtos"
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

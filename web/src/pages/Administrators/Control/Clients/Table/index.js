import React, { useState, useEffect } from 'react';

import MaterialTable from 'material-table';

import MenuOpenIcon from '@material-ui/icons/MenuOpen';

import { Container, Button } from '../../../../../styles/Administrators/table.js';

import api from '../../../../../services/api';

export default function Table() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function loadClients() {
      const response = await api.get('/clients');

      setClients(response.data);
    }

    loadClients();
  }, []);

  const columns = [
    { title: 'ID', field: 'id' },
    { title: 'Nome', field: 'nome' },
    { title: 'Email', field: 'email' },
    { title: 'CPF', field: 'cpf' },
    { title: 'Data de Nascimento', field: 'data_nasc' },
  ];

  return (
    <>
      <Container>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

        <MaterialTable
          title="Clientes"
          columns={columns}
          data={clients}
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

import React, { useState, useEffect } from 'react';

import MaterialTable from 'material-table';

import { Container } from '../../../../../styles/Administrators/table.js';

import api from '../../../../../services/api';

export default function Table() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    async function loadLogs() {
      const response = await api.get('/logs');

      setLogs(response.data);
    }

    loadLogs();
  }, []);

  const columns = [
    { title: 'ID', field: 'id' },
    { title: 'Item', field: 'item' },
    { title: 'Entidade', field: 'entidade' },
    { title: 'Operação', field: 'op' },
    { title: 'Data', field: 'createdAt' }
  ];

  return (
    <>
      <Container>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

        <MaterialTable
          title="Logs"
          columns={columns}
          data={logs}
          options={{
            actionsColumnIndex: -1
          }}
        />
      </Container>
    </>
  );
}

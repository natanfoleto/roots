import React from 'react';

import DataTable, { createTheme } from 'react-data-table-component';

export default function Table() {
  createTheme('solarized', {
    text: {
      primary: '#000',
      secondary: '#FF6702',
    },
    background: {
      default: '#fff',
    },
    context: {
      background: '#1f1',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  });

  const columns = [
    {
      name: 'ID',
      selector: 'id',
      sortable: true,
      grow: 0
    },
    {
      name: 'Nome',
      selector: 'nome',
      sortable: true,
    },
    {
      name: 'CPF',
      selector: 'cpf',
      sortable: true,
      right: true,
    },
    {
      name: 'Data Nasc.',
      selector: 'data_nasc',
      sortable: true,
      right: true,
    },
    {
      name: 'E-mail',
      selector: 'email',
      sortable: true,
      right: true,
    },
    {
      name: 'Ativo',
      selector: 'ativo',
      sortable: true,
      right: true,
    },
    {
      name: 'Criado Em',
      selector: 'created_at',
      sortable: true,
      right: true,
      hide: 'md'
    },
    {
      name: 'Alterado Em',
      selector: 'updated_at',
      sortable: true,
      right: true,
      hide: 'md'
    },
  ];

  const data = [
    { id: 1, nome: 'Natan Foleto', cpf: '48092926816', data_nasc: '10/07/1999', email: 'natanfoleto@hotmail.com', ativo: 'S', created_at: '08/09/2020 13:00:00', updated_at: '08/09/2020 13:00:00' },
    { id: 1, nome: 'Vinicius Faleiros', cpf: '48092926816', data_nasc: '10/07/1999', email: 'natanfoleto@hotmail.com', ativo: 'S', created_at: '08/09/2020 13:00:00', updated_at: '08/09/2020 13:00:00' },
    { id: 1, nome: 'Luís Guilherme', cpf: '48092926816', data_nasc: '10/07/1999', email: 'natanfoleto@hotmail.com', ativo: 'S', created_at: '08/09/2020 13:00:00', updated_at: '08/09/2020 13:00:00' },
    { id: 1, nome: 'Guilherme Silveira', cpf: '48092926816', data_nasc: '10/07/1999', email: 'natanfoleto@hotmail.com', ativo: 'S', created_at: '08/09/2020 13:00:00', updated_at: '08/09/2020 13:00:00' },
    { id: 1, nome: 'Breno Barbareli', cpf: '48092926816', data_nasc: '10/07/1999', email: 'natanfoleto@hotmail.com', ativo: 'S', created_at: '08/09/2020 13:00:00', updated_at: '08/09/2020 13:00:00' },
    { id: 1, nome: 'Natan', cpf: '48092926816', data_nasc: '10/07/1999', email: 'natanfoleto@hotmail.com', ativo: 'S', created_at: '08/09/2020 13:00:00', updated_at: '08/09/2020 13:00:00' },
    { id: 1, nome: 'Natan', cpf: '48092926816', data_nasc: '10/07/1999', email: 'natanfoleto@hotmail.com', ativo: 'S', created_at: '08/09/2020 13:00:00', updated_at: '08/09/2020 13:00:00' },
    { id: 1, nome: 'Natan', cpf: '48092926816', data_nasc: '10/07/1999', email: 'natanfoleto@hotmail.com', ativo: 'S', created_at: '08/09/2020 13:00:00', updated_at: '08/09/2020 13:00:00' },
    { id: 1, nome: 'Natan', cpf: '48092926816', data_nasc: '10/07/1999', email: 'natanfoleto@hotmail.com', ativo: 'S', created_at: '08/09/2020 13:00:00', updated_at: '08/09/2020 13:00:00' },
    { id: 1, nome: 'Natan', cpf: '48092926816', data_nasc: '10/07/1999', email: 'natanfoleto@hotmail.com', ativo: 'S', created_at: '08/09/2020 13:00:00', updated_at: '08/09/2020 13:00:00' },
    { id: 1, nome: 'Natan', cpf: '48092926816', data_nasc: '10/07/1999', email: 'natanfoleto@hotmail.com', ativo: 'S', created_at: '08/09/2020 13:00:00', updated_at: '08/09/2020 13:00:00' },
    { id: 1, nome: 'Natan', cpf: '48092926816', data_nasc: '10/07/1999', email: 'natanfoleto@hotmail.com', ativo: 'S', created_at: '08/09/2020 13:00:00', updated_at: '08/09/2020 13:00:00' },
    { id: 1, nome: 'Natan', cpf: '48092926816', data_nasc: '10/07/1999', email: 'natanfoleto@hotmail.com', ativo: 'S', created_at: '08/09/2020 13:00:00', updated_at: '08/09/2020 13:00:00' },
  ];

  return (
    <DataTable
      columns={columns}
      data={data}
      theme="solarized"
      pagination={true}
      selectableRows
    />
  );
}

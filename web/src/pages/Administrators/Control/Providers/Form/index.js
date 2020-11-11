import React from 'react';

import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform';

import Header from '../../../../../components/Administrators/Header';

import history from '../../../../../services/history';
import api from '../../../../../services/api';

import { Container, Menu, Forms } from './styles';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import IconBack from '@material-ui/icons/ArrowBack';
import IconDelete from '@material-ui/icons/DeleteForever';
import IconAdd from '@material-ui/icons/Add';

export default function Index({ location }) {
  let provider;

  if (location.state !== undefined) {
    provider = null;
    provider = location.state.data;
  }

  function displayToast(type, msg) {
    switch (type) {
      case 'error':
        toast.error(msg, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
        break;

      case 'success':
        toast.success(msg, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
        break;

      case 'info':
        toast.info(msg, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
        break;

      default:
        break;
    }
  }

  async function handleAdd(data) {
    try {
      const response = await api.post('/providers', data);

      if (response.status === 200) {
        displayToast('success', 'Fornecedor salvo com sucesso!');
        history.push('/providers');
      } else {
        console.log(response);
        displayToast('error', 'Algo deu errado, verifique os dados e tente novamente!');
      }
    } catch (err) {
      displayToast('error', 'Algo deu errado, verifique os dados e tente novamente!');
      console.log(err);
    }
  }

  async function handleEdit(data) {
    try {
      confirmAlert({
        title: 'Confirme para enviar',
        message: 'Deseja alterar este fornecedor?',
        buttons: [
          {
            label: 'Sim',
            onClick: async () => {
              const body = {
                id: data.id,
                nome: data.nome,
                cnpj: data.cnpj,
                email: data.email, 
                telefone: data.telefone,
              };

              const response = await api.put('/providers', body);

              if (response.status === 200) {
                displayToast('info', 'Fornecedor alterado com sucesso!');
                history.push('/providers');
              } else {
                console.log(response);
                displayToast('error', 'Algo deu errado, verifique os dados e tente novamente!');
              }
            }
          },
          {
            label: 'Não',
            onClick: () => {

            }
          }
        ]
      });
    } catch (err) {
      displayToast('error', 'Algo deu errado, verifique os dados e tente novamente!');
      console.log(err);
    }

  }

  async function handleDelete() {
    try {
      confirmAlert({
        title: 'Confirmar ação',
        message: 'Desja excluir este fornecedor ?',
        buttons: [
          {
            label: 'Sim',
            onClick: async () => {
              const response = await api.delete(`/providers/${provider.id}`);

              if (response.status === 200) {
                displayToast('info', 'Fornecedor deletado com sucesso!');
                history.push('/providers');
              } else {
                console.log(response);
                displayToast('error', 'Algo deu errado, tente novamente!');
              }
            }
          },
          {
            label: 'Não',
            onClick: () => {

            }
          }
        ]
      });
    } catch (err) {
      displayToast('error', 'Algo deu errado, tente novamente!');
      console.log(err);
    }
  }

  function handleBack() {
    history.push('/providers');
  }

  return (
    <>
      <Header />

      <Container>
        <Menu>
          <button
            type="button"
            onClick={handleDelete}
          >
            <IconDelete />
          </button>

          <button
            type="button"
            onClick={handleBack}
          >
            <IconBack />
          </button>
        </Menu>

        <Forms>
          <Form
            initialData={provider}
            onSubmit={provider === undefined ? handleAdd : handleEdit}
            autoComplete="off"
          >

            <Input name="id" type="hidden" />

            <Input
              name="nome"
              placeholder="Nome do fornecedor"
              maxLength={50}
              required
            />

            <Input
              name="cnpj"
              placeholder="CNPJ"
              maxLength={14}
              required
            />

            <Input
              name="email"
              placeholder="E-mail"
              maxLength={50}
              required
            />

            <Input
              name="telefone"
              placeholder="Telefone"
              maxLength={50}
              required
            />

            <button
              type="submit"
            >
              Salvar
            </button>
          </Form>
        </Forms>
      </Container>
    </>
  );
}

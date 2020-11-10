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
  let categorie;

  if (location.state !== undefined) {
    categorie = null;
    categorie = location.state.data;
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
      const response = await api.post('/categories', data);

      if (response.status === 200) {
        displayToast('success', 'Categoria salva com sucesso!');
        history.push('/categories');
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
        message: 'Deseja alterar esta categoria?',
        buttons: [
          {
            label: 'Sim',
            onClick: async () => {
              const body = {
                id: data.id,
                nome: data.nome,
              };

              const response = await api.put('/categories', body);

              if (response.status === 200) {
                displayToast('info', 'Categoria alterada com sucesso!');
                history.push('/categories');
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
        message: 'Desja excluir esta categoria?',
        buttons: [
          {
            label: 'Sim',
            onClick: async () => {
              const response = await api.delete(`/categories/${categorie.id}`);

              if (response.status === 200) {
                displayToast('info', 'Categoria deletada com sucesso!');
                history.push('/categories');
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
    history.push('/categories');
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
            initialData={categorie}
            onSubmit={categorie === undefined ? handleAdd : handleEdit}
            autoComplete="off"
          >

            <Input name="id" type="hidden" />

            <Input
              name="nome"
              placeholder="Nome da categoria"
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

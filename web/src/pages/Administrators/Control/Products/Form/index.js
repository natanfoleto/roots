import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import { Form, Input, Select } from '@rocketseat/unform';

import Header from '../../../../../components/Administrators/Header';

import history from '../../../../../services/history';
import api from '../../../../../services/api';

import Logs from '../../../../../utils/RegisterLogs';

import { Container, Menu, Forms, Photo, PhotoData } from './styles';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import IconBack from '@material-ui/icons/ArrowBack';
import IconDelete from '@material-ui/icons/DeleteForever';
import IconAdd from '@material-ui/icons/Add';

export default function Index({ location }) {
  let product;
  let photos = [];

  const [opt, setOpt] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('/categories');

      if (response.status === 200) {
        let all = [];

        response.data.map((categorie) => {
          let body = {
            id: categorie.id,
            title: categorie.nome
          }

          all.push(body);
        });

        setOpt(all);
      }
    }

    loadCategories();
  }, []);

  if (location.state !== undefined) {
    photos = [];
    product = null;
    product = location.state.data;
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

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('photos', data);

    if (response.status === 200) {
      photos.push(response.data);

      console.log(photos);
    }
  }

  async function handleAdd(data) {
    try {
      const body = {
        data: data,
        photos: photos
      };

      const response = await api.post('/products', body);

      if (response.status === 200) {
        displayToast('success', 'Produto salvo com sucesso!');

        const log = {
          item: data.nome,
          entidade: "Produto",
          op: "Criação"
        }

        await Logs.create(log);

        history.push('/products');
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
        message: 'Deseja alterar este produto?',
        buttons: [
          {
            label: 'Sim',
            onClick: async () => {
              const body = {
                data: data,
                photos: photos
              };

              const response = await api.put('/products', body);

              if (response.status === 200) {
                displayToast('info', 'Produto alterado com sucesso!');

                const log = {
                  item: data.nome,
                  entidade: "Produto",
                  op: "Atualização"
                }

                await Logs.create(log);

                history.push('/products');
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
        message: 'Desja inativar este produto?',
        buttons: [
          {
            label: 'Sim',
            onClick: async () => {
              const response = await api.delete(`/products/${product.id}`);

              if (response.status === 200) {
                displayToast('info', 'Produto inativado com sucesso!');

                const log = {
                  item: product.nome,
                  entidade: "Produto",
                  op: "Inativação"
                }

                await Logs.create(log);

                history.push('/products');
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
    history.push('/products');
  }

  return (
    <>
      <Header />

      <Container>
        <Menu>
          <button
            type="button"
            hidden={product === undefined || product.ativo === 0 ? true : false}
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
            initialData={product}
            onSubmit={product === undefined ? handleAdd : handleEdit}
            autoComplete="off"
          >
            <h1
              style={
                product !== undefined && product.ativo === 0 ?
                  { color: "#e8271a" } :
                  { color: "#000" }}
            >
              {product !== undefined && product.ativo === 0 ? 'Produto Inativo' : 'Dados do produto'}
            </h1>

            <Input name="id" type="hidden" />

            <Input
              name="nome"
              placeholder="Nome do produto"
              maxLength={30}
              readOnly={product !== undefined && product.ativo === 0 ? true : false}
              maxLength={50}
              required
            />

            <Select
              name="categoria"
              options={opt}
              placeholder="Selecione uma categoria"
              disabled={product !== undefined && product.ativo === 0 ? true : false}
              required
            />

            <Input
              name="valor"
              type="number"
              placeholder="R$"
              maxLength={10}
              readOnly={product !== undefined && product.ativo === 0 ? true : false}
              required
            />

            <button
              type="submit"
              disabled={product !== undefined && product.ativo === 0 ? true : false}
            >
              Salvar
            </button>
          </Form>

          <Photo>
            <h1>Fotos</h1>

            <PhotoData>
              {
                product !== undefined ?
                  product.photos.map(photo => (
                    <img
                      key={photo.id}
                      alt={photo.nome}
                      src={photo.url}
                    />
                  ))
                  :
                  photos.map(photo => (
                    <img
                      key={photo.id}
                      alt={photo.nome}
                      src={photo.url}
                    />
                  ))
              }

              <label htmlFor="photo">
                <IconAdd />
              </label>

              <input
                type="file"
                id="photo"
                accept="image/*"
                onChange={handleChange}
                disabled={product !== undefined && product.ativo === 0 ? true : false}
              />
            </PhotoData>
          </Photo>
        </Forms>
      </Container>
    </>
  );
}

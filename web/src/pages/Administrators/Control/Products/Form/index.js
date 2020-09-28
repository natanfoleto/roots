import React from 'react';

import { toast } from 'react-toastify';
import { Form, Input, Select } from '@rocketseat/unform';
import CurrencyInput from 'react-currency-masked-input'

import Header from '../../../../../components/Administrators/Header';

import history from '../../../../../services/history';
import api from '../../../../../services/api';

import { Container, Forms, Photo, PhotoData } from './styles';

import Icon from '@material-ui/icons/ArrowBack';

export default function Index({ location }) {
  let product;
  
  if(location.state !== undefined) {
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
    
      default:
        break;
    }
  }

  function handleBack() {
    history.push('/products');
  }

  async function handleAdd(data) {
    try {
      const response = await api.post('/products', data);
  
      if (response.status === 200) {
        displayToast('success', 'Produto salvo com sucesso!');
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
      
    } catch (err) {
      displayToast('error', 'Algo deu errado, verifique os dados e tente novamente!');
      console.log(err);
    }
  }

  const opt = [
    { id: 1, title: 'Camisetas' }
  ];

  return (
    <>
      <Header />

      <Container>
        <button 
          type="button"
          onClick={handleBack}
        >
          <Icon />
        </button>

        <Forms>
          <Form initialData={product} onSubmit={product === undefined ? handleAdd : handleEdit} autoComplete="off">
            <h1>Dados do produto</h1>

            <Input name="nome" placeholder="Nome do produto" />
            <Select name="categoria" options={opt} placeholder="Selecione uma categoria" />
            <Input name="valor" type="number" placeholder="R$" />

            <button type="submit">Salvar</button>
          </Form>
          
          <Photo>
            <h1>Fotos</h1>

            <PhotoData>
 
            </PhotoData>
          </Photo>
        </Forms>
      </Container>
    </>
  );
}

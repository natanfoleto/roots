import React from 'react';

import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { Wrapper, Content, Back } from '../../../styles/Auth/auth';

import Logs from '../../../utils/RegisterLogs';

import history from '../../../services/history';
import api from '../../../services/api';

export default function SignUp() {
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
      const body = {
        data: data,
      };

      const response = await api.post('/clients', body);

      if (response.status === 200) {
        displayToast('success', 'Você se cadastrou com sucesso!');

        const log = {
          item: data.nome,
          entidade: "Cliente",
          op: "Criação"
        }

        await Logs.create(log);

        history.push('/login/client');
      } else {
        console.log(response);
        displayToast('error', 'Algo deu errado, verifique os dados e tente novamente!');
      }
    } catch (err) {
      displayToast('error', 'Algo deu errado, verifique os dados e tente novamente!');
      console.log(err);
    }
  }

  return (
    <>
      <Wrapper>
        <Content>
          <h1> ROOTS </h1>

          <Form
            onSubmit={handleAdd}
          >
            <Input
              name="cpf"
              type="text"
              maxLength={11}
              placeholder="CPF"
              autoComplete="off"
              required
            />
            <Input
              name="nome"
              type="text"
              maxLength={50}
              placeholder="Nome completo"
              autoComplete="off"
              required
            />
            <Input
              name="data_nasc"
              type="date"
              placeholder="Data de nascimento"
              autoComplete="off"
              required
            />
            <Input
              name="email"
              type="email"
              maxLength={30}
              placeholder="Seu e-mail"
              autoComplete="off"
              required
            />
            <Input
              name="password"
              type="password"
              maxLength={32}
              placeholder="Senha"
              autoComplete="off"
              required
            />
            <Input
              name="confirmaSenha"
              type="password"
              maxLength={32}
              placeholder="Confirma sua senha"
              autoComplete="off"
              required
            />

            <button type="submit">Cria conta</button>

            <Link to="/login/client">Já tem conta?</Link>

            <Back>
              <nav>
                <Link to="/choose">🡨 MUDAR TIPO DE LOGIN </Link>
              </nav>
            </Back>
          </Form>
        </Content>
      </Wrapper>
    </>
  );
}

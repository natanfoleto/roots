import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signOut } from '../../../store/modules/auth/actions';
import { updateProfileRequest } from '../../../store/modules/user/actions';

import Header from '../../../components/Administrators/Header';

import { Container, Dados, Forms, Card, CardData, Menu } from './styles';

import { toast } from 'react-toastify';

import Icon from '@material-ui/icons/ExitToApp';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function displayToast(type, msg) {
    switch (type) {
      case 'error':
        toast.error(msg, {
          position: toast.POSITION.TOP_CENTER,
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

  async function handleSubmit(data) {
    if (data.oldPassword !== "") {
      if (data.password === "" || data.confirmPasswrod === "") {
        displayToast('error', 'Digite a nova senha e confirme!');
        return;
      }

      if (data.password !== data.confirmPassword) {
        displayToast('error', 'As senhas não são iguais!');
        return;
      }
    }

    await dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <>
      <Header />

      <Container>

        <h1>Dados do Sistema</h1>
        <Dados>
          <Menu>
            <button>
              Logs
            </button>

            <button>
              v1.0.0
            </button>
          </Menu>

          <button

            type="button"
            onClick={handleSignOut}
          >
            <Icon />
          </button>
        </Dados>

        <Forms>
          <Form initialData={profile} onSubmit={handleSubmit} autoComplete="off">
            <h1>Dados Pessoais</h1>

            <Input
              name="nome"
              placeholder="Nome completo"
              maxLength={50}
              required
            />

            <Input
              name="cpf"
              type="text"
              placeholder="Seu CPF"
              maxLength={11}
              required
            />

            <Input
              name="data_nasc"
              type="date"
              placeholder="Data de Nasc."
              maxLength={10}
              required
            />

            <Input
              name="email"
              type="email"
              placeholder="seu endereço de e-mail"
              maxLength={50}
              required
            />

            <hr />

            <p>Alterar senha</p>

            <Input
              name="oldPassword"
              type="password"
              placeholder="Sua senha atual"
              maxLength={32}
            />

            <Input
              name="password"
              type="password"
              placeholder="Nova senha"
              maxLength={32}
            />

            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirmação de senha"
              maxLength={32}
            />

            <button type="submit">Salvar</button>
          </Form>

          <Card>
            <h1>Outras Informações</h1>

            <CardData>
              <p><strong>Status da conta:</strong> {profile.ativo && profile.ativo === 1 ? 'Ativo' : 'Inativo'} </p>
              <p><strong>Conta criada em:</strong> {profile.createdAt && profile.createdAt} </p>
              <p><strong>Conta atualizada em:</strong> {profile.updatedAt && profile.updatedAt} </p>
            </CardData>
          </Card>
        </Forms>
      </Container>
    </>
  );
}

import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signOut } from '../../../store/modules/auth/actions';
import { updateProfileRequest } from '../../../store/modules/user/actions';

import Header from '../../../components/Administrators/Header';

import { Container, Dados, Forms, Card, CardData, Menu } from './styles';

import Icon from '@material-ui/icons/ExitToApp';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
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
              Usuários
            </button>

            <button>
              Logs
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

            <Input name="nome" placeholder="Nome completo" />
            <Input name="cpf" type="text" placeholder="Seu CPF" />
            <Input name="data_nasc" type="date" placeholder="Data de Nasc." />
            <Input name="email" type="email" placeholder="seu endereço de e-mail" />

            <hr />

            <p>Alterar senha</p>

            <Input name="oldPasswrod" type="password" placeholder="Sua senha atual" />
            <Input name="password" type="password" placeholder="Nova senha" />
            <Input name="confirmPasswrod" type="password" placeholder="Confirmação de senha" />

            <button type="submit">Salvar</button>
          </Form>
          
          <Card>
            <h1>Outras Informações</h1>

            <CardData>
              <p><strong>Status da conta:</strong> { profile.ativo === 1 ? 'Ativo' : 'Inativo' } </p>
              <p><strong>Conta criada em:</strong> {profile.createdAt} </p>
              <p><strong>Conta atualizada em:</strong> {profile.updatedAt} </p>
            </CardData>
          </Card>
        </Forms>
      </Container>
    </>
  );
}

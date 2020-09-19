import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';
import api from '../../../services/api';

import { signInSuccess, signUpSuccess, signFailure } from './actions';

function displayToast(msg) {
  toast.error(msg, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  });
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email, 
      password
    });

    const { token, user } = response.data;

    if (!user) {
      displayToast('Usuário não é um administrador!'); 
      yield put(signFailure());
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/control');
  } catch (err) {
    displayToast('Falha na autenticação, verifique seus dados'); 
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { 
      nome,
      cpf,
      data_nasc,
      email,
      password      
    } = payload.data;

    yield call(api.post, 'users', {
      nome,
      cpf,
      data_nasc,
      email,
      password
    });

    yield put(signUpSuccess());
  } catch (err) {
    console.log(err);
    displayToast('Falha no cadastro, verifique os dados'); 
    yield put(signFailure());
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
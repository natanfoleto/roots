import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';
import api from '../../../services/api';

import { signInSuccess, signFailure } from './actions';

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

  const { token } = payload.client;

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

    const { token, client } = response.data;

    if (!client) {
      displayToast('Usuário não é um cliente!');
      yield put(signFailure());
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, client));

    history.push('/');
  } catch (err) {
    displayToast('Falha na autenticação, verifique seus dados');
    yield put(signFailure());
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@authClient/SIGN_IN_REQUEST', signIn),
  takeLatest('@authClient/SIGN_OUT', signOut),
]);
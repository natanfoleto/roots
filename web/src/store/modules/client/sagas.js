import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { updateClientSuccess, updateClientFailure } from './actions';

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

export function* updateClient({ payload }) {
  try {
    const { nome, cpf, data_nasc, email, ...rest } = payload.data;

    const client = Object.assign(
      { nome, cpf, data_nasc, email },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, 'clients', client);

    if (response.data.error === 1) {
      displayToast('error', response.data.value);
    } else if (response.data.error === 2) {
      displayToast('error', 'Senha incorreta!');
    } else {
      displayToast('success', 'Perfil atualizado com sucesso!');

      yield put(updateClientSuccess(response.data.client));
    }
  } catch (err) {
    displayToast('error', 'Erro ao atualizar perfil, confira seus dados!');
    yield put(updateClientFailure());
  }
}

export default all([
  takeLatest('@client/UPDATE_CLIENT_REQUEST', updateClient),
]);
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

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

export function* updateProfile({ payload }) {
  try {
    const { nome, cpf, data_nasc, email, ...rest } = payload.data;

    const profile = Object.assign(
      { nome, cpf, data_nasc, email },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, 'users', profile);

    if (response.data.error === 1) {
      displayToast('error', 'Erro ao atualizar perfil!');
    } else if (response.data.error === 2) {
      displayToast('error', 'Senha incorreta!');
    } else {
      displayToast('success', 'Perfil atualizado com sucesso!');

      yield put(updateProfileSuccess(response.data.user));
    }
  } catch (err) {
    displayToast('error', 'Erro ao atualizar perfil, confira seus dados!');
    yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
]);
import { takeLatest, call, put ,all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { updateProductSuccess, updateProductFailure } from './actions';

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

export function* updateProduct({ payload }) {
  try {
    const { name, categoria, valor } = payload.data;

    const product = Object.assign(
      { name, categoria, valor }
    );

    const response = yield call(api.put, 'products', product);

    displayToast('success', 'Produto atualizado com sucesso!');

    yield put(updateProductSuccess(response.data));
  } catch (err) {
    displayToast('error', 'Erro ao atualizar produto, confira os dados!');
    yield put(updateProductFailure());
  }
}

export default all([
  takeLatest('@user/UPDATE_PRODUCT_REQUEST', updateProduct),
]);
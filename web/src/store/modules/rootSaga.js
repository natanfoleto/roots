import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import client from './client/sagas';
import authClient from './authClient/sagas';

export default function* rootSaga() {
  return yield all([auth, user, client, authClient]);
}
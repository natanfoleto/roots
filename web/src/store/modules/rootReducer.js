import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import client from './client/reducer';
import authClient from './authClient/reducer';

export default combineReducers({
  auth,
  user,
  client,
  authClient,
});
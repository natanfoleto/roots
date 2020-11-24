import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer({
    key: 'roots',
    storage,
    whitelist: ['auth', 'user', 'client', 'authClient'],
  }, reducers);

  return persistedReducer;
};
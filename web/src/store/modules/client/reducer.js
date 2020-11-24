import produce from 'immer';

const INITIAL_STATE = {
  client: null,
};

export default function client(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@authClient/SIGN_IN_SUCCESS': {
        draft.client = action.payload.client;
        break;
      }

      case '@authClient/SIGN_OUT': {
        draft.client = null;
        break;
      }

      case '@client/UPDATE_CLIENT_SUCCESS': {
        draft.client = action.payload.client;
        break;
      }

      default:
    }
  });
}
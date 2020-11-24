import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function authCLient(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@authClient/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@authClient/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }

      case '@authClient/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@authClient/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        break;
      }

      default:
        draft.loading = false;
    }
  });
}
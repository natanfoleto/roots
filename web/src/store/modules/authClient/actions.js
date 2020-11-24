export function signInRequest(email, password) {
  return {
    type: '@authClient/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, client) {
  return {
    type: '@authClient/SIGN_IN_SUCCESS',
    payload: { token, client },
  };
}

export function signFailure() {
  return {
    type: '@authClient/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@authClient/SIGN_OUT',
  };
}

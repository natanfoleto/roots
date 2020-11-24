export function updateClientRequest(data) {
  return {
    type: '@client/UPDATE_CLIENT_REQUEST',
    payload: { data },
  }
}

export function updateClientSuccess(client) {
  return {
    type: '@client/UPDATE_CLIENT_SUCCESS',
    payload: { client },
  };
}

export function updateClientFailure() {
  return {
    type: '@client/UPDATE_CLIENT_FAILURE',
  };
}
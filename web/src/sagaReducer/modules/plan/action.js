
export function storeInRequest(data) {
  return {
      type: '@plan/STORE_IN_REQUEST',
      payload: data,
  };
}

export function storeInSuccess(data) {
  return {
      type: '@plan/STORE_IN_SUCCESS',
      payload: data,
  };
}

export function storeInFailure() {
  return {
      type: '@plan/UPDATE_IN_FAILURE',
  };
}

//Update Planos
export function updateInRequest(data) {
  return {
      type: '@plan/UPDATE_IN_REQUEST',
      payload: data,
  };
}

export function updateInSuccess(data) {
  return {
      type: '@plan/UPDATE_IN_SUCCESS',
      payload: data,
  };
}

export function updateInFailure() {
  return {
      type: '@plan/STORE_IN_FAILURE',
  };
}

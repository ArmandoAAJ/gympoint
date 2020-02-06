
export function storeInRequest(data) {
  return {
      type: '@register/STORE_IN_REQUEST',
      payload: data,
  };
}

export function storeInSuccess(data) {
  return {
      type: '@register/STORE_IN_SUCCESS',
      payload: data,
  };
}

export function storeInFailure() {
  return {
      type: '@register/UPDATE_IN_FAILURE',
  };
}

//Update registros
export function updateInRequest(data) {
  return {
      type: '@register/UPDATE_IN_REQUEST',
      payload: data,
  };
}

export function updateInSuccess(data) {
  return {
      type: '@register/UPDATE_IN_SUCCESS',
      payload: data,
  };
}

export function updateInFailure() {
  return {
      type: '@register/STORE_IN_FAILURE',
  };
}

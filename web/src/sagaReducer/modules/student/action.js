
export function storeInRequest(data) {
  return {
      type: '@student/STORE_IN_REQUEST',
      payload: data,
  };
}

export function storeInSuccess(data) {
  return {
      type: '@student/STORE_IN_SUCCESS',
      payload: data,
  };
}

export function storeInFailure() {
  return {
      type: '@student/UPDATE_IN_FAILURE',
  };
}

//Update Student
export function updateInRequest(data) {
  return {
      type: '@student/UPDATE_IN_REQUEST',
      payload: data,
  };
}

export function updateInSuccess(data) {
  return {
      type: '@student/UPDATE_IN_SUCCESS',
      payload: data,
  };
}

export function updateInFailure() {
  return {
      type: '@student/STORE_IN_FAILURE',
  };
}

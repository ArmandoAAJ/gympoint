import produce from 'immer'

const INITIAL_STATE = {
  register: [],
  loading: false,
};

export default function plan(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@register/STORE_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      })

    case '@register/STORE_SUCCESS':
      return produce(state, draft => {
        draft.register = action.payload;
        draft.loading = false;
      })

    case '@register/STORE_FAILURE':
      return produce(state, draft => {
        draft.loading = true;
      })

    case '@register/UPDATE_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      })

    case '@register/UPDATE_SUCCESS':
      return produce(state, draft => {
        draft.register = action.payload;
        draft.loading = false;
      })

    case '@register/UPDATE_FAILURE':
      return produce(state, draft => {
        draft.loading = true;
      })

    default:
      return state;
  }
}

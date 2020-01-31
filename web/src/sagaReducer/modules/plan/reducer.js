import produce from 'immer'

const INITIAL_STATE = {
  plan: [],
  loading: false,
};

export default function plan(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@autenticacao/STORE_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      })

    case '@autenticacao/STORE_SUCCESS':
      return produce(state, draft => {
        draft.plan = action.payload;
        draft.loading = false;
      })

    case '@autenticacao/STORE_FAILURE':
      return produce(state, draft => {
        draft.loading = true;
      })

    case '@autenticacao/UPDATE_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      })

    case '@autenticacao/UPDATE_SUCCESS':
      return produce(state, draft => {
        draft.plan = action.payload;
        draft.loading = false;
      })

    case '@autenticacao/UPDATE_FAILURE':
      return produce(state, draft => {
        draft.loading = true;
      })

    default:
      return state;
  }
}

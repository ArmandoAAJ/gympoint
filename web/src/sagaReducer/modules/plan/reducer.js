import produce from 'immer'

const INITIAL_STATE = {
  plan: [],
  loading: false,
};

export default function plan(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@plan/STORE_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      })

    case '@plan/STORE_SUCCESS':
      return produce(state, draft => {
        draft.plan = action.payload;
        draft.loading = false;
      })

    case '@plan/STORE_FAILURE':
      return produce(state, draft => {
        draft.loading = true;
      })

    case '@plan/UPDATE_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      })

    case '@plan/UPDATE_SUCCESS':
      return produce(state, draft => {
        draft.plan = action.payload;
        draft.loading = false;
      })

    case '@plan/UPDATE_FAILURE':
      return produce(state, draft => {
        draft.loading = true;
      })

    default:
      return state;
  }
}

import produce from 'immer'

const INITIAL_STATE = {
  student: [],
  loading: false,
};

export default function student(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@student/STORE_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      })

    case '@student/STORE_SUCCESS':
      return produce(state, draft => {
        draft.plan = action.payload;
        draft.loading = false;
      })

    case '@student/STORE_FAILURE':
      return produce(state, draft => {
        draft.loading = true;
      })

    case '@student/UPDATE_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      })

    case '@student/UPDATE_SUCCESS':
      return produce(state, draft => {
        draft.plan = action.payload;
        draft.loading = false;
      })

    case '@student/UPDATE_FAILURE':
      return produce(state, draft => {
        draft.loading = true;
      })

    default:
      return state;
  }
}

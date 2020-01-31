import { takeLatest, all, call, put } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import history from '../../../services/history'
import api from '../../../services/api'

import { storeInSuccess, storeInFailure, updateInFailure, updateInSuccess } from './action'

export function* store({ payload }) {
  try {
    const response = yield call(api.post, 'plans', payload)
    if (response) {
      yield put(storeInSuccess(payload))
      toast.success('Registro salvo!')
      history.push('/plans')
    }
  } catch (err) {
    toast.error(err.response.data.error);
    yield put(storeInFailure());
  }
}

export function* update({ payload }) {
  try {
    const { title, duration, price } = payload;
    const response = yield call(api.put, `plans/${payload.id}`, {
      title, duration, price
    })

    if (response) {
      yield put(updateInSuccess(payload))
      toast.success('Registro salvo!')
      history.push('/plans')
    }
  } catch (err) {
    toast.error(err.response.data.error);
    yield put(updateInFailure());
  }
}

export default all([
  takeLatest('@plan/STORE_IN_REQUEST', store),
  takeLatest('@plan/UPDATE_IN_REQUEST', update),
]);

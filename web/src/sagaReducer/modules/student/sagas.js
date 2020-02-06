import { takeLatest, all, call, put } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import history from '../../../services/history'
import api from '../../../services/api'

import { storeInSuccess, storeInFailure, updateInFailure, updateInSuccess } from './action'

export function* store({ payload }) {
  try {
    const response = yield call(api.post, 'students', payload)
    if (response) {
      yield put(storeInSuccess(payload))
      toast.success('Registro salvo!')
      history.push('/dashboard')
    }
  } catch (err) {
    toast.error(err.response.data.error);
    yield put(storeInFailure());
  }
}

export function* update({ payload }) {
  try {
    const { name, age, weight, height } = payload;
    const response = yield call(api.put, `students/${payload.id}`, {
      name, age, weight, height
    })

    if (response) {
      yield put(updateInSuccess(payload))
      toast.success('Registro salvo!')
      history.push('/dashboard')
    }
  } catch (err) {
    toast.error(err.response.data.error);
    yield put(updateInFailure());
  }
}

export default all([
  takeLatest('@student/STORE_IN_REQUEST', store),
  takeLatest('@student/UPDATE_IN_REQUEST', update),
]);

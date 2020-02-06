import { all } from 'redux-saga/effects';

import autenticacao from './autenticacao/sagas'
import user from './user/sagas'
import plan from './plan/sagas'
import student from './student/sagas'
import register from './register/sagas'


export default function* rootSaga() {
  return yield all([autenticacao, user, plan, student, register])
}

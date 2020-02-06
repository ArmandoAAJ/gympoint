import { combineReducers } from 'redux'

import autenticacao from './autenticacao/reducer'
import user from './user/reducer'
import plan from './plan/reducer'
import student from './student/reducer'
import register from './register/reducer'

export default combineReducers({
  autenticacao,
  user,
  plan,
  student,
  register
})

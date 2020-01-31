import { combineReducers } from 'redux'

import autenticacao from './autenticacao/reducer'
import user from './user/reducer'
import plan from './plan/reducer'

export default combineReducers({
  autenticacao,
  user,
  plan,
})

import { combineReducers } from 'redux'
import listReducer from './listReducer'
import detailReducer from './detailStuReducer'

export default combineReducers({
  listReducer,
  detailReducer,
})

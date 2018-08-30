import { combineReducers } from 'redux'
import listReducer from './listReducer'
import detailReducer from './detailReducer'

export default combineReducers({
  listReducer,
  detailReducer,
})

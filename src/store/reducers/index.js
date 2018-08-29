import { combineReducers } from 'redux'
import studentReducer from './studentReducer'
import obtainStuReducer from './obtainStuReducer'
import examReducer from './examReducer'
import examdetailReducer from './examdetailReducer'
import mycenterReducer from './mycenterReducer'
import addexamstudentReducer from './addexamstudentReducer'
import preexamReducer from './preexamReducer'
export default combineReducers({
  studentReducer,
  obtainStuReducer,
  examReducer,
  examdetailReducer,
  mycenterReducer,
  addexamstudentReducer,
  preexamReducer
})
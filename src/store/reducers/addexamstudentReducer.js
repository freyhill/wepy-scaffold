import { handleActions } from 'redux-actions'
import { ADD_EXAMSTUDENT_DATA } from '../types/index'
export default handleActions({
  [ADD_EXAMSTUDENT_DATA](state, action) {
    return { ...state,
      addexamstudentdata: action.newData
    }
  }
}, {
  addexamstudentdata: {}
})

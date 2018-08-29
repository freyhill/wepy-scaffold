import { handleActions } from 'redux-actions'
import { STUDENTLIST } from '../types/index'
export default handleActions({
  [STUDENTLIST](state, action) {
  
    return { ...state,
      studentdata: action.newData
    }
  }
}, {
  studentdata: {}
})

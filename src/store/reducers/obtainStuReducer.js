import { handleActions } from 'redux-actions'
import { OBTAINSTUDENTLIST } from '../types/index'
export default handleActions({
  [OBTAINSTUDENTLIST](state, action) {
    
    return { ...state,
      obtainstudent: action.newData
    }
  }
}, {
  obtainstudent: {}
})

import { handleActions } from 'redux-actions'
import { EXAM_INIT_DATA } from '../types/index'
export default handleActions({
  [EXAM_INIT_DATA](state, action) {
  
    return { ...state,
      examinitdata: action.newData
    }
  }
}, {
  examinitdata: {}
})

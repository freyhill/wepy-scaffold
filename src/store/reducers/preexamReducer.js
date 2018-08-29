import { handleActions } from 'redux-actions'
import { PRE_EXAM_DATA } from '../types/index'
export default handleActions({
  [PRE_EXAM_DATA](state, action) {
  
    return { ...state,
      preexamdata: action.newData
    }
  }
}, {
  preexamdata: {}
})

import { handleActions } from 'redux-actions'
import { EXAM_DETAIL_DATA } from '../types/index'
export default handleActions({
  [EXAM_DETAIL_DATA](state, action) {
  
    return { ...state,
      examdetaildata: action.newData
    }
  }
}, {
  examdetaildata: {}
})

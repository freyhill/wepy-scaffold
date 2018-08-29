import { handleActions } from 'redux-actions'
import { DETAIL_DATA } from '../types/index'
export default handleActions({
  [DETAIL_DATA](state, action) {

    return { ...state,
      detaildata: action.newData
    }
  }
}, {
  detaildata: {}
})

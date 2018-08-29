import { handleActions } from 'redux-actions'
import { MY_CENTER_DATA } from '../types/index'
export default handleActions({
  [MY_CENTER_DATA](state, action) {
    return { ...state,
      mycenterdata: action.newData
    }
  }
}, {
  mycenterdata: {}
})
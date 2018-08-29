import { handleActions } from 'redux-actions'
import { LIST_DATA } from '../types/index'
export default handleActions({
  [LIST_DATA](state, action) {

    return { ...state,
      listdata: action.newData
    }
  }
}, {
  listdata: {}
})

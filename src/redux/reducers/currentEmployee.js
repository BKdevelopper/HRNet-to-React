import { initialState } from './initialState'
import { GET_ALL_EMPLOYEE } from '../action/actionTypes'
const init = { ...initialState }

export const Reducer = (state = init, action) => {
  switch (action.type) {
    case GET_ALL_EMPLOYEE:
      return { ...state, allEmployee: action.payload.allEmployee }
    default:
      return state
  }
}

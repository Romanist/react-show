import { CLICK_MAIN_SCREEN } from "../constants/action-types"

const initialState = {
  clickedSquare: []
}

function rootReducer(state = initialState, action) {
  if (action.type === CLICK_MAIN_SCREEN) {
    return Object.assign({}, state, {
      clickedSquare: state.clickedSquare.concat(action.payload)
    })
  }
  return state
}

export default rootReducer

import {
  CLICK_MAIN_SCREEN,
  TIMEOUT_TO_MAIN_PAGE,
  BACK_TO_MAIN_PAGE,
  FIRST_LOAD,
  WRONG_EXAMPLE,
  CHOOSE_EXAMPLE,
  DATA_LOADED,
} from "../constants/action-types"

const initialState = {
  clickedSquare: [],
  backToMainPageState: false,
  timeOutToMainPageState: null,
  firstLoaded: false,
  exampleToShow: null,
  remoteArticles: [],
}

function rootReducer(state = initialState, action) {
  if (action.type === CLICK_MAIN_SCREEN) {
    return Object.assign({}, state, {
      clickedSquare: state.clickedSquare.concat(action.payload)
    })
  }
  if (action.type === BACK_TO_MAIN_PAGE) {
    return Object.assign({}, state, {
      backToMainPageState: action.payload
    })
  }
  if (action.type === TIMEOUT_TO_MAIN_PAGE) {
    return Object.assign({}, state, {
      timeOutToMainPageState: action.payload
    })
  }
  if (action.type === FIRST_LOAD) {
    return Object.assign({}, state, {
      firstLoaded: action.payload
    })
  }
  if (action.type === CHOOSE_EXAMPLE) {
    return Object.assign({}, state, {
      exampleToShow: action.payload
    })
  }
  if (action.type === WRONG_EXAMPLE) {
    return Object.assign({}, state, {
      exampleToShow: null
    })
  }
  if (action.type === 'DATA_READY_TO_CHANGE') {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    })
  }
  return state
}

export default rootReducer

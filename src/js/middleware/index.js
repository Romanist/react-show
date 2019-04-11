import { CHOOSE_EXAMPLE, WRONG_EXAMPLE, DATA_LOADED } from "../constants/action-types"

const customMiddleWare = ({ dispatch })  => next => action => {
  console.log('MIDDLEWARE HERE:', action)
  console.log(' ')
  if (action.type === CHOOSE_EXAMPLE) {
    if (action.payload === 3) {
      console.log('DISPATCHED')
      return dispatch({ type: WRONG_EXAMPLE })
    }
  }
  if (action.type === DATA_LOADED) {
    console.log('DATA_LOADED')
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_READY_TO_CHANGE", payload: json })
      })
  }
  next(action)
}

export default customMiddleWare

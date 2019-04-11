import { applyMiddleware, createStore, compose } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import rootReducer from "../reducers/index"
import customMiddleWare from "../middleware/index"

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = applyMiddleware(promise, thunk, logger, customMiddleWare)
// const middleware = applyMiddleware(customMiddleWare)
const store = createStore(
  rootReducer,
  storeEnhancers(middleware),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store

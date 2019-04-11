import {
  CLICK_MAIN_SCREEN,
  TIMEOUT_TO_MAIN_PAGE,
  BACK_TO_MAIN_PAGE,
  FIRST_LOAD,
  CHOOSE_EXAMPLE,
  DATA_LOADED,
} from "../constants/action-types"

export function clickMainScreen(payload) {
  return { type: CLICK_MAIN_SCREEN, payload }
}

export function timeOutToMainPage(payload) {
  return { type: TIMEOUT_TO_MAIN_PAGE, payload }
}

export function backToMainPage(payload) {
  return { type: BACK_TO_MAIN_PAGE, payload }
}

export function firstLoadHandle(payload) {
  return { type: FIRST_LOAD, payload }
}

export function chooseExampleToShow(payload) {
  return { type: CHOOSE_EXAMPLE, payload }
}

export function getData(payload) {
  return { type: DATA_LOADED, payload }
}

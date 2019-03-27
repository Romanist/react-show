import {
  CLICK_MAIN_SCREEN,
  TIMEOUT_TO_MAIN_PAGE,
  BACK_TO_MAIN_PAGE,
  FIRST_LOAD,
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

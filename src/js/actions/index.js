import { CLICK_MAIN_SCREEN } from "../constants/action-types"

export function clickMainScreen(payload) {
  return { type: CLICK_MAIN_SCREEN, payload }
}

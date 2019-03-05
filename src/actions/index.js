import { CLICK_DETAIL } from "../constants/action-types"

export function clickDetail(payload){
    return { type: CLICK_DETAIL, value: payload}
}
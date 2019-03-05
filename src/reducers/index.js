import { CLICK_DETAIL } from "../constants/action-types"

const initialState = {
    isDetailClicked: false
};

function routingChecker(state = initialState, action) {
    if (action.type === CLICK_DETAIL) {
        return {
            isDetailClicked: true
        }
    }
    return state
}

export default routingChecker;
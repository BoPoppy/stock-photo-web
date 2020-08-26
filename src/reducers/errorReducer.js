import {IMAGES} from '../constants/index'

const errorReducer = (state = null, action) => {
    var newState = state
    switch (action.type) {
        case IMAGES.LOAD_FAIL:
            return action.error
        case IMAGES.LOAD:
        case IMAGES.LOAD_SUCCESS:
            return newState = null
        default:
            return newState
    }
}

export default errorReducer
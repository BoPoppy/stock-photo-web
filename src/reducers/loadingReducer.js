import {IMAGES} from '../constants/index'

const loadingReducer = (state = false, action) => {
    var newState = state
    switch (action.type) {
        case IMAGES.LOAD:
            return newState = true
        case IMAGES.LOAD_SUCCESS:
            return newState = false
        case IMAGES.LOAD_FAIL:
            return newState = false
        default:
            return newState
    }
}

export default loadingReducer
import {IMAGES} from '../constants/index'

const imagesReducer = (state = [], action) => {
    var newState = state
    if (action.type === IMAGES.LOAD_SUCCESS) {
        newState = [...state, ...action.images]
    }
    return newState
}

export default imagesReducer;
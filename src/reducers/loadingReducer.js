
export default function loadingReducer(state = false, action) {
    switch(action.type) {
        case 'LOADING':
            return true
        case 'LOADED':
            return false
        default:
            return state
    }
}

export default function picturesReducer(result = [], action) {
    switch(action.type) {
        case 'FETCH':
            return action.payload
        default:
            return result
    }
}
export default function searchReducer(searchInput = '', action) {
    switch(action.type) {
        case 'SEARCH_INPUT':
            return action.payload
        default:
            return searchInput
    }
}
import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import loadingReducer from './loadingReducer'
import picturesReducer from './picturesReducer'

export default combineReducers({
    pictures: picturesReducer,
    isLoading: loadingReducer,
    searchInput: searchReducer
})
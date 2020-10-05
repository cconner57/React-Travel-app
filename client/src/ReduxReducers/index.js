import { combineReducers } from 'redux';
// import postReducer from './postReducer';
import isLoggedReducer from './isLogged'

const rootReducers = combineReducers({
	// postReducer,
	isLoggedReducer
})

export default rootReducers
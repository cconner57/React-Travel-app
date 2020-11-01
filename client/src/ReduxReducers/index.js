import { combineReducers } from 'redux';
import markerReducer from './marker';
import postReducer from './post';
import commentReducer from './comment'

const rootReducers = combineReducers({
	markerReducer,
	postReducer,
	commentReducer,
});

export default rootReducers;

import { FETCH_MARKERS, NEW_MARKER } from '../ReduxConstants/actionTypes';

const markerReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_MARKERS:
			return {
				data: action.payload
			};
		case NEW_MARKER:
			return {
				data: [...state.data, action.payload],
			};
		default:
			return state;
	}
};

export default markerReducer;

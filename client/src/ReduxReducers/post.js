import { FETCH_POST, NEW_POST } from '../ReduxConstants/actionTypes';

const postReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_POST:
			return {
				data: action.payload
			}
		case NEW_POST:
			return {
				data: [action.payload, ...state.data],
			};
		default:
			return state;
	}
};

export default postReducer;

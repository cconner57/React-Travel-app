import { FETCH_COMMENT, NEW_COMMENT } from '../ReduxConstants/actionTypes';

const commentReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_COMMENT:
			return {
				data: action.payload
			}
		case NEW_COMMENT:
			return {
				data: [...state.data, action.payload],
			};
		default:
			return state;
	}
};

export default commentReducer;

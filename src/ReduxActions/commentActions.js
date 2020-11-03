import { FETCH_COMMENT, NEW_COMMENT } from '../ReduxConstants/actionTypes';

export const fetchComments = (data) => {
	return {
		type: FETCH_COMMENT,
		payload: data,
	};
};

export const newComments = (comment) => {
	return {
		type: NEW_COMMENT,
		payload: comment,
	};
};
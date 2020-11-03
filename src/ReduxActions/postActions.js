import { FETCH_POST, NEW_POST } from '../ReduxConstants/actionTypes';

export const fetchPosts = (data) => {
	return {
		type: FETCH_POST,
		payload: data,
	};
};

export const newPosts = (post) => {
	return {
		type: NEW_POST,
		payload: post,
	};
};

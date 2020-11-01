import { FETCH_MARKERS, NEW_MARKER } from '../ReduxConstants/actionTypes';

export const fetchMarkers = (data) => {
	return {
		type: FETCH_MARKERS,
		payload: data,
	};
};

export const newMarker = (marker) => {
	return {
		type: NEW_MARKER,
		payload: marker
	};
};
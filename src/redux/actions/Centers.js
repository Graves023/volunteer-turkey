import { GET_CENTERS } from '../../constants/ActionTypes';
import { fetchError, fetchStart, fetchSuccess } from './Common';
import { HttpClient } from '../../utils/HttpClient';

export const getCenters = (callbackFun) => {
	return dispatch => {
		dispatch(fetchStart());
		HttpClient
		.get('/centers')
		.then(data => {
			if (data.status === 200) {
				dispatch(fetchSuccess());
				dispatch({ type: GET_CENTERS, payload: data.data });
				if(callbackFun) callbackFun(data.data);
			} else {
				dispatch(fetchError('There was something issue in responding server.'));
			}
		})
		.catch(error => {
			dispatch(fetchError('There was something issue in responding server'));
		});
	}
}
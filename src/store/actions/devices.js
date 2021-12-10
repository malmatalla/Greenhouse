import * as actionTypes from './actionTypes'; 

import axios from '../axios'; 

export const getDevicesStart = () => {
	return {
		type: actionTypes.GET_DEVICES_START
	}
}

export const getDevicesSuccess = (data) => {
	return {
		type: actionTypes.GET_DEVICES_SUCCESS, 
		devices: data
	}
}

export const getDevicesFail = (error) => {
	return {
		type: actionTypes.GET_DEVICES_FAIL,
		error: error
	}
}


export const getDevices = (siteId, apiKey) => {
	return dispatch => {
		dispatch(getDevicesStart()); 
		const url = '/devicelist/' + siteId + '/' + apiKey;
		const headers = {
			'headers': {
				'Content-Type': 'text/json'
			}
		}
		return axios.get(url, headers)
			.then(res => {
				// console.log('GET /devicelist/' + siteId + '/' + apiKey + '. Result: ', res);
				dispatch(getDevicesSuccess(res.data));
			})
			.catch(error => {
				console.log("error", error);
				dispatch(getDevicesFail(JSON.stringify(error)));
			});
	}
}
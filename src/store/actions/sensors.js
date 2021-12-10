import * as actionTypes from './actionTypes'; 

import axios from '../axios'; 

export const getSensorListStart = () => {
	return {
		type: actionTypes.GET_SENSOR_LIST_START
	}
}

export const getSensorListSuccess = (data) => {
	return {
		type: actionTypes.GET_SENSOR_LIST_SUCCESS, 
		sensorList: data
	}
}

export const getSensorListFail = (error) => {
	return {
		type: actionTypes.GET_SENSOR_LIST_FAIL,
		error: error
	}
}

export const getSensorMedianValuesStart = () => {
	return {
		type: actionTypes.GET_SENSOR_MEDIAN_VALUES_START
	}
}

export const getSensorMedianValuesSuccess = (data) => {
	return {
		type: actionTypes.GET_SENSOR_MEDIAN_VALUES_SUCCESS, 
		sensorMedianValues: data
	}
}

export const getSensorMedianValuesFail = (error) => {
	return {
		type: actionTypes.GET_SENSOR_MEDIAN_VALUES_FAIL,
		error: error
	}
}

export const getSensorTrendsStart = () => {
	return {
		type: actionTypes.GET_SENSOR_TRENDS_START
	}
}

export const getSensorTrendsSuccess = (data) => {
	return {
		type: actionTypes.GET_SENSOR_TRENDS_SUCCESS, 
		sensorTrends: data
	}
}

export const getSensorTrendsFail = (error) => {
	return {
		type: actionTypes.GET_SENSOR_TRENDS_FAIL,
		error: error
	}
}
// DEPRECATED
export const getSensorValuesStart = () => {
	return {
		type: actionTypes.GET_SENSOR_VALUES_START
	}
}
// DEPRECATED
export const getSensorValuesSuccess = (data) => {
	return {
		type: actionTypes.GET_SENSOR_VALUES_SUCCESS, 
		values: data
	}
}
// DEPRECATED
export const getSensorValuesFail = (error) => {
	return {
		type: actionTypes.GET_SENSOR_VALUES_FAIL,
		error: error
	}
}

export const getLatestSensorValuesStart = () => {
	return {
		type: actionTypes.GET_LATEST_SENSOR_VALUES_START
	}
}

export const getLatestSensorValuesSuccess = (data) => {
	return {
		type: actionTypes.GET_LATEST_SENSOR_VALUES_SUCCESS, 
		values: data
	}
}

export const getLatestSensorValuesFail = (error) => {
	return {
		type: actionTypes.GET_LATEST_SENSOR_VALUES_FAIL, 
		error: error
	}
}

export const getPeriodSensorValuesStart = () => {
	return {
		type: actionTypes.GET_PERIOD_SENSOR_VALUES_START
	}
}

export const getPeriodSensorValuesSuccess = (data) => {
	return {
		type: actionTypes.GET_PERIOD_SENSOR_VALUES_SUCCESS, 
		values: data
	}
}

export const getPeriodSensorValuesFail = (error) => {
	return {
		type: actionTypes.GET_PERIOD_SENSOR_VALUES_FAIL, 
		error: error
	}
}

export const getSensorList = (siteKey, deviceKey, apiKey) => {
	return dispatch => {
		dispatch(getSensorListStart());
		const url = '/sensorlist/' + siteKey + '/' + deviceKey + '/' + apiKey; 
		const headers = {
			'headers': {
				'Content-Type': 'text/json'
			}
		}
		return axios.get(url, headers)
			.then(res => {
				dispatch(getSensorListSuccess(res.data)); 
			})
			.catch(error => {
				console.log('error', error);
				dispatch(getSensorListFail(JSON.stringify(error)))
			})
	}
}

export const getSensorMedianValues = (siteKey, deviceKey, sensorKey, period) => {
	return dispatch => {
		dispatch(getSensorMedianValuesStart());
		const apiKey = 'abc123';
		const url = '/sensor/values/' + siteKey + '/' + deviceKey + '/' + sensorKey + '/' + period + '/' + apiKey;
		const headers = {
			'headers': {
				'Content-Type': 'text/json'
			}
		}
		axios.get(url, headers)
			.then(res => {
				dispatch(getSensorMedianValuesSuccess(res.data));
			})
			.catch(error => {
				console.log("error", error);
				dispatch(getSensorMedianValuesFail(JSON.stringify(error)));
			});
	}
}

// DEPRECATED
export const getSensorValues = (siteKey) => {
	return dispatch => {
		dispatch(getSensorValuesStart()); 
		const url = '/greenhouse/data/' + siteKey;
		const headers = {
			'headers': {
				'Content-Type': 'text/json'
			}
		}
		axios.get(url, headers)
			.then(res => {
				dispatch(getSensorValuesSuccess(res.data));
			})
			.catch(error => {
				console.log("error", error);
				dispatch(getSensorValuesFail(JSON.stringify(error)));
			});
	}
}

export const getLatestSensorValues = (siteKey) => {
	return dispatch => {
		dispatch(getLatestSensorValuesStart());
		const url = '/greenhouse/data/latest/' + siteKey;
		const headers = {
			'headers': {
				'Content-Type': 'text/json'
			}
		}
		axios.get(url, headers)
			.then(res => {
				// console.log(JSON.stringify(res.data));
				dispatch(getLatestSensorValuesSuccess(res.data));
			})
			.catch(error => {
				console.log("error", error);
				dispatch(getLatestSensorValuesFail(JSON.stringify(error)));
			});
	}
}

export const getPeriodSensorValues = (siteKey, deviceKey, sensorKey, period) => {
	return dispatch => {
		dispatch(getPeriodSensorValuesStart());
		const apiKey = 'abc123';
		const url = '/sensor/values/' + siteKey + '/' + deviceKey + '/' + sensorKey + '/' + period + '/' + apiKey;
		const headers = {
			'headers': {
				'Content-Type': 'text/json'
			}
		}
		return axios.get(url, headers)
			.then(res => {
				dispatch(getPeriodSensorValuesSuccess(res.data));
			})
			.catch(error => {
				console.log("error", error);
				dispatch(getPeriodSensorValuesFail(JSON.stringify(error)));
			});
	}
}
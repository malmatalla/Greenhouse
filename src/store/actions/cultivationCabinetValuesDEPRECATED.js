/*import * as actionTypes from './actionTypes'; 

import axios from '../axios'; 

export const getCultivationCabinetValuesStart = () => {
	return {
		type: actionTypes.GET_CULTIVATION_CABINET_VALUES_START
	}
}

export const getCultivationCabinetValuesSuccess = (data) => {
	return {
		type: actionTypes.GET_CULTIVATION_CABINET_VALUES_SUCCESS, 
		values: data
	}
}

export const getCultivationCabinetValuesFail = (error) => {
	return {
		type: actionTypes.GET_CULTIVATION_CABINET_VALUES_FAIL,
		error: error
	}
}

export const getLatesCultivationCabinetValuesStart = () => {
	return {
		type: actionTypes.GET_LATEST_CULTIVATION_CABINET_VALUES_START
	}
}

export const getLatesCultivationCabinetValuesSuccess = (data) => {
	return {
		type: actionTypes.GET_LATEST_CULTIVATION_CABINET_VALUES_SUCCESS, 
		values: data
	}
}

export const getLatesCultivationCabinetValuesFail = (error) => {
	return {
		type: actionTypes.GET_LATEST_CULTIVATION_CABINET_VALUES_FAIL, 
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

export const getCulticationCabinetValues = (siteKey) => {
	return dispatch => {
		dispatch(getCultivationCabinetValuesStart()); 
		const url = '/greenhouse/data/' + siteKey;
		const headers = {
			'headers': {
				'Content-Type': 'text/json'
			}
		}
		axios.get(url, headers)
			.then(res => {
				dispatch(getCultivationCabinetValuesSuccess(res.data));
			})
			.catch(error => {
				console.log("error", error);
				dispatch(getCultivationCabinetValuesFail(JSON.stringify(error)));
			});
	}
}

export const getLatestCultivationCabinetValues = (siteKey) => {
	return dispatch => {
		dispatch(getLatesCultivationCabinetValuesStart());
		const url = '/greenhouse/data/latest/' + siteKey;
		const headers = {
			'headers': {
				'Content-Type': 'text/json'
			}
		}
		axios.get(url, headers)
			.then(res => {
				// console.log(JSON.stringify(res.data));
				dispatch(getLatesCultivationCabinetValuesSuccess(res.data));
			})
			.catch(error => {
				console.log("error", error);
				dispatch(getLatesCultivationCabinetValuesFail(JSON.stringify(error)));
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
}*/
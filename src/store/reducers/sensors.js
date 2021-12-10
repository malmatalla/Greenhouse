import * as actionTypes from '../actions/actionTypes'; 
import {updateObject} from '../../shared/utility'; 

const initialState = {
	sensorList: [],
	sensorMedianValues: [], 
	values: {},
	sensorTrends: [], 
	loading: false,
	error: null
}

const getSensorListStart = (state, action) => {
	return updateObject(state, {
		loading: true, 
		error: null
	})
}

const getSensorListSuccess = (state, action) => {
	return updateObject(state, {
		sensorList: action.sensorList,
		loading: false
	});
}

const getSensorListFail = (state, action) => {
	return updateObject(state, {
		loading: false,
		error: action.error
	})
}

const getSensorMedianValuesStart = (state, action) => {
	return updateObject(state, {
		loading: true, 
		error: null
	})
}

const getSensorMedianValuesSuccess = (state, action) => {
	return updateObject(state, {
		sensorMedianValues: action.sensorMedianValues,
		loading: false
	});
}

const getSensorMedianValuesFail = (state, action) => {
	return updateObject(state, {
		loading: false,
		error: action.error
	})
}

const getSensorTrendsStart = (state, action) => {
	return updateObject(state, {
		loading: true, 
		error: null
	})
}

const getSensorTrendsSuccess = (state, action) => {
	return updateObject(state, {
		sensorTrends: action.sensorTrends,
		loading: false
	});
}

const getSensorTrendsFail = (state, action) => {
	return updateObject(state, {
		loading: false,
		error: action.error
	})
}

const getSensorValuesStart = (state, action) => {
	return updateObject(state, {
		loading: true, 
		error: null
	});
}

const getSensorValuesSuccess = (state, action) => {
	return updateObject(state, {
		values: action.values,
		loading:false
	});
}

const getSensorValuesFail = (state, action) => {
	return updateObject(state, {
		loading: false,
		error: action.error
	})
}

const getLatestSensorValuesStart = (state, action) => {
	return updateObject(state, {
		loading: true, 
		error: null
	})
}

const getLatestSensorValuesSuccess = (state, action) => {
	return updateObject(state, {
		values: action.values,
		loading: false
	});
}

const getLatestSensorValuesFail = (state, action) => {
	return updateObject(state, {
		loading: false,
		error: action.error
	})
}

const getPeriodSensorValuesStart = (state, action) => {
	return updateObject(state, {
		loading: true, 
		error: null
	})
}

const getPeriodSensorValuesSuccess = (state, action) => {
	return updateObject(state, {
		values: action.values,
		loading: false
	});
}

const getPeriodSensorValuesFail = (state, action) => {
	return updateObject(state, {
		loading: false,
		error: action.error
	})
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case (actionTypes.GET_SENSOR_LIST_START): return getSensorListStart(state, action);
		case (actionTypes.GET_SENSOR_LIST_SUCCESS): return getSensorListSuccess(state, action);
		case (actionTypes.GET_SENSOR_LIST_FAIL): return getSensorListFail(state, action);

		case (actionTypes.GET_SENSOR_MEDIAN_VALUES_START): return getSensorMedianValuesStart(state, action);
		case (actionTypes.GET_SENSOR_MEDIAN_VALUES_SUCCESS): return getSensorMedianValuesSuccess(state, action);
		case (actionTypes.GET_SENSOR_MEDIAN_VALUES_FAIL): return getSensorMedianValuesFail(state, action);

		case (actionTypes.GET_SENSOR_TRENDS_START): return getSensorTrendsStart(state, action);
		case (actionTypes.GET_SENSOR_TRENDS_SUCCESS): return getSensorTrendsSuccess(state, action);
		case (actionTypes.GET_SENSOR_TRENDS_FAIL): return getSensorTrendsFail(state, action);

		case (actionTypes.GET_SENSOR_VALUES_START): return getSensorValuesStart(state, action);
		case (actionTypes.GET_SENSOR_VALUES_SUCCESS): return getSensorValuesSuccess(state, action);
		case (actionTypes.GET_SENSOR_VALUES_FAIL): return getSensorValuesFail(state, action);

		case (actionTypes.GET_LATEST_SENSOR_VALUES_START): return getLatestSensorValuesStart(state, action);
		case (actionTypes.GET_LATEST_SENSOR_VALUES_SUCCESS): return getLatestSensorValuesSuccess(state, action);
		case (actionTypes.GET_LATEST_SENSOR_VALUES_FAIL): return getLatestSensorValuesFail(state, action);

		case (actionTypes.GET_PERIOD_SENSOR_VALUES_START): return getPeriodSensorValuesStart(state, action);
		case (actionTypes.GET_PERIOD_SENSOR_VALUES_SUCCESS): return getPeriodSensorValuesSuccess(state, action);
		case (actionTypes.GET_PERIOD_SENSOR_VALUES_FAIL): return getPeriodSensorValuesFail(state, action);
		default: return state;
	}
}

export default reducer; 
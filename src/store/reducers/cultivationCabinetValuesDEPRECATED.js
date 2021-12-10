/*import * as actionTypes from '../actions/actionTypes'; 
import {updateObject} from '../../shared/utility'; 

const initialState = {
	
	loading: false
}

const getCultivationCabinetValuesStart = (state, action) => {
	return updateObject(state, {
		loading: true, 
		error: null
	});
}

const getCultivationCabinetValuesSuccess = (state, action) => {
	return updateObject(state, {
		values: action.values,
		loading:false
	});
}

const getCultivationCabinetValuesFail = (state, action) => {
	return updateObject(state, {
		loading: false,
		error: action.error
	})
}

const getLatestCultivationCabinetValuesStart = (state, action) => {
	return updateObject(state, {
		loading: true, 
		error: null
	})
}

const getLatestCulticationCabinetValuesSuccess = (state, action) => {
	return updateObject(state, {
		values: action.values,
		loading: false
	});
}

const getLatestCultivationCabinetValuesFail = (state, action) => {
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
		case (actionTypes.GET_CULTIVATION_CABINET_VALUES_START): return getCultivationCabinetValuesStart(state, action);
		case (actionTypes.GET_CULTIVATION_CABINET_VALUES_SUCCESS): return getCultivationCabinetValuesSuccess(state, action);
		case (actionTypes.GET_CULTIVATION_CABINET_VALUES_FAIL): return getCultivationCabinetValuesFail(state, action);

		case (actionTypes.GET_LATEST_CULTIVATION_CABINET_VALUES_START): return getLatestCultivationCabinetValuesStart(state, action);
		case (actionTypes.GET_LATEST_CULTIVATION_CABINET_VALUES_SUCCESS): return getLatestCulticationCabinetValuesSuccess(state, action);
		case (actionTypes.GET_LATEST_CULTIVATION_CABINET_VALUES_FAIL): return getLatestCultivationCabinetValuesFail(state, action);

		case (actionTypes.GET_PERIOD_SENSOR_VALUES_START): return getPeriodSensorValuesStart(state, action);
		case (actionTypes.GET_PERIOD_SENSOR_VALUES_SUCCESS): return getPeriodSensorValuesSuccess(state, action);
		case (actionTypes.GET_PERIOD_SENSOR_VALUES_FAIL): return getPeriodSensorValuesFail(state, action);
		default: return state;
	}
}

export default reducer; */
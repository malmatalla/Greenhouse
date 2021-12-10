import * as actionTypes from '../actions/actionTypes'; 
import {updateObject} from '../../shared/utility'; 

const initialState = {
	devices: [],
	loading: false
}

const getDevicesStart = (state, action) => {
	return updateObject(state, {
		loading: true, 
		error: null
	});
}

const getDevicesSuccess = (state, action) => {
	return updateObject(state, {
		devices: action.devices,
		loading:false
	});
}

const getDevicesFail = (state, action) => {
	return updateObject(state, {
		loading: false,
		error: action.error
	})
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case (actionTypes.GET_DEVICES_START): return getDevicesStart(state, action);
		case (actionTypes.GET_DEVICES_SUCCESS): return getDevicesSuccess(state, action);
		case (actionTypes.GET_DEVICES_FAIL): return getDevicesFail(state, action);
		default: return state;
	}
}

export default reducer; 
import * as actionTypes from '../actions/actionTypes'; 
import {updateObject} from '../../shared/utility'; 

const initialState = {
	credentials: {},
	loginErrorMessage: null,
	loading: false,
	resetPasswordMessage: null,
	resetPasswordErrorMessage: null
}

const getCredentialsStart = (state, action) => {
	return updateObject(state, {
		loading: true, 
		error: null
	});
}

const getCredentialsSuccess = (state, action) => {
	return updateObject(state, {
		credentials: action.credentials,
		loading:false
	});
}

const getCredentialsFail = (state, action) => {
	return updateObject(state, {
		loading: false,
		credentials: {}, 
		loginErrorMessage: action.loginErrorMessage
	})
}

const recoverPasswordStart = (state, action) => {
	return updateObject(state, {
		loading: true, 
		error: null
	});
}

const recoverPasswordSuccess = (state, action) => {
	return updateObject(state, {
		loading:false,
		resetPasswordMessage: action.resetPasswordMessage
	});
}

const recoverPasswordFail = (state, action) => {
	return updateObject(state, {
		loading: false,
		resetPasswordErrorMessage: action.resetPasswordErrorMessage
	})
}

const logout = (state, action) => {
	return updateObject(state, {
		credentials: {}
	});
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case (actionTypes.GET_CREDENTIALS_START): return getCredentialsStart(state, action);
		case (actionTypes.GET_CREDENTIALS_SUCCESS): return getCredentialsSuccess(state, action);
		case (actionTypes.GET_CREDENTIALS_FAIL): return getCredentialsFail(state, action);

		case (actionTypes.RECOVER_PASSWORD_START): return recoverPasswordStart(state, action);
		case (actionTypes.RECOVER_PASSWORD_SUCCESS): return recoverPasswordSuccess(state, action);
		case (actionTypes.RECOVER_PASSWORD_FAIL): return recoverPasswordFail(state, action);

		case (actionTypes.LOGOUT): return logout(state, action);
		default: return state;
	}
}

export default reducer; 
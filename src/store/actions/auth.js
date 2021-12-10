import * as actionTypes from './actionTypes'; 

import axios from '../axios'; 

export const getCredentialsStart = () => {
	return {
		type: actionTypes.GET_CREDENTIALS_START
	}
}

export const getCredentialsSuccess = (data) => {
	return {
		type: actionTypes.GET_CREDENTIALS_SUCCESS, 
		credentials: data
	}
}

export const getCredentialsFail = (error) => {
	return {
		type: actionTypes.GET_CREDENTIALS_FAIL,
		loginErrorMessage: error
	}
}

export const recoverPasswordStart = () => {
	return {
		type: actionTypes.RECOVER_PASSWORD_START
	}
}

export const recoverPasswordSuccess = (message) => {
	return {
		type: actionTypes.RECOVER_PASSWORD_SUCCESS,
		resetPasswordMessage: message
	}
}

export const recoverPasswordFail = (error) => {
	return {
		type: actionTypes.RECOVER_PASSWORD_FAIL,
		resetPasswordErrorMessage: error
	}
}

export const logout = () => {
	localStorage.removeItem('credentials'); 
	return {
		type: actionTypes.LOGOUT
	}
}

export const getCredentials = (email, password) => {
	return dispatch => {
		dispatch(getCredentialsStart()); 
		const credentials = {userId: 1337, email: email}
		localStorage.setItem('credentials', JSON.stringify(credentials)); 
		console.log('Setting credentials', localStorage.getItem('credentials'));
		dispatch(getCredentialsSuccess(credentials));
	}
}

export const tryAutoLogin = () => {
	return dispatch => {
		if(localStorage.getItem('credentials')){
			dispatch(getCredentialsSuccess(JSON.parse(localStorage.getItem('credentials'))));
		}else{
			dispatch(logout());
		}
	}
}

export const recoverPassword = (email) => {
	return dispatch => {
		dispatch(recoverPasswordStart()); 
		return axios.post("https://jsonplaceholder.typicode.com/posts", {
				userId: '1337', 
				email: email, 
				apiKey: 'abc123'
			})
			.then(res => {
				dispatch(recoverPasswordSuccess('POST lyckades. Data: ' + JSON.stringify(res.data)));
			})
			.catch(error => {
				console.log('error', error);
				dispatch(recoverPasswordFail(JSON.stringify(error)));
			});	

	}
}
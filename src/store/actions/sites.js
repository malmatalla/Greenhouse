
import * as actionTypes from './actionTypes'; 

import axios from '../axios'; 

// ----------------------------
export const getSiteGroupsStart = () => {
	return {
		type: actionTypes.GET_SITEGROUPS_START
	}
}

export const getSiteGroupsSuccess = (data) => {
	return {
		type: actionTypes.GET_SITEGROUPS_SUCCESS,
		siteGroups: data
	}
}

export const getSiteGroupsFail = (error) => {
	return {
		type: actionTypes.GET_SITEGROUPS_FAIL,
		error: error
	}
}

// ----------------------------
export const getSitesStart = () => {
	return {
		type: actionTypes.GET_SITES_START
	}
}

export const getSitesSuccess = (data) => {
	return {
		type: actionTypes.GET_SITES_SUCCESS, 
		sites: data
	}
}

export const getSitesFail = (error) => {
	return {
		type: actionTypes.GET_SITES_FAIL,
		error: error
	}
}

// ----------------------------
export const getSiteGroups = (email, apiKey) => {
	return dispatch => {
		dispatch(getSiteGroupsStart());				
		const url = '/sitegrouplist/' + email + '/' + apiKey;

		const headers = {
			'headers': {
				'Content-Type': 'text/json'
			}
		}
		axios.get(url, headers)
			.then(res => {		
				dispatch(getSiteGroupsSuccess(res.data));
			})
			.catch(error => {
				console.log("error", error);
				dispatch(getSiteGroupsFail(JSON.stringify(error)));
			});
	}
}

// ----------------------------
export const getSites = (siteGroupKey, apiKey) => {
	return dispatch => {
		dispatch(getSitesStart());
		const url = '/sitelist/' + siteGroupKey + '/' + apiKey; 
		const headers = {
			'headers': {
				'Content-Type': 'text/json'
			}
		}
		axios.get(url, headers)
			.then(res => {
				dispatch(getSitesSuccess(res.data)); 
			})
			.catch(error => {
				console.log('error', error);
				dispatch(getSitesFail(JSON.stringify(error)))
			})
	}
}
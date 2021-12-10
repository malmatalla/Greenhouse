import * as actionTypes from '../actions/actionTypes'; 
import {updateObject} from '../../shared/utility'; 

const initialState = {
	siteGroups: [], 
	sites: [],
	loading: false
}
// -----------------------------
const getSiteGroupsStart = (state, action) => {
	return updateObject(state, {
		loading: true, 
		error: null
	})
}

const getSiteGroupsSuccess = (state, action) => {
	return updateObject(state, {
		siteGroups: action.siteGroups,
		loading: false
	});
}

const getSiteGroupsFail = (state, action) => {
	return updateObject(state, {
		loading: false,
		error: action.error
	})
}

// -----------------------------
const getSitesStart = (state, action) => {
	return updateObject(state, {
		loading: true, 
		error: null
	})
}

const getSitesSuccess = (state, action) => {
	return updateObject(state, {
		sites: action.sites,
		loading: false
	});
}

const getSitesFail = (state, action) => {
	return updateObject(state, {
		loading: false,
		error: action.error
	})
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case (actionTypes.GET_SITEGROUPS_START): return getSiteGroupsStart(state, action); 
		case (actionTypes.GET_SITEGROUPS_SUCCESS): return getSiteGroupsSuccess(state, action); 
		case (actionTypes.GET_SITEGROUPS_FAIL): return getSiteGroupsFail(state, action); 

		case (actionTypes.GET_SITES_START): return getSitesStart(state, action);
		case (actionTypes.GET_SITES_SUCCESS): return getSitesSuccess(state, action);
		case (actionTypes.GET_SITES_FAIL): return getSitesFail(state, action);
		default: return state;
	}
}

export default reducer; 
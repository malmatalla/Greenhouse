import reducer from './auth.js'; 
import * as actionTypes from '../actions/actionTypes'; 

describe('auth reducer', () => {
	it('Should return initial state', () => {
		expect(reducer(undefined, {})).toEqual({
			credentials: {},
			loginErrorMessage: null,
			loading: false,
			resetPasswordMessage: null,
			resetPasswordErrorMessage: null
		});
	});

	it('Should store credentials upon login', () => {
		expect(reducer({
			credentials: {},
			loginErrorMessage: null,
			loading: false,
			resetPasswordMessage: null,
			resetPasswordErrorMessage: null
		}, {
			type: actionTypes.GET_CREDENTIALS_SUCCESS, 
			credentials: {
				userId: 'some-user-id'
			}
		})).toEqual({
			credentials: {
				userId: 'some-user-id', 
				loginErrorMessage: null, 
				loading: false,
				resetPasswordMessage: null,
				resetPasswordErrorMessage: null
			}
		})
	})
}); 
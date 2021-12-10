import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { Redirect } from 'react-router-dom'; 

import Aux from '../../../hoc/ReactAux/ReactAux'; 
import { objectIsEmpty } from '../../../shared/utility'; 

import Modal from '../../../components/UI/Modal/Modal'; 
import Spinner from '../../../components/UI/Spinner/Spinner'; 
import Notification from '../../../components/UI/Notification/Notification'; 

import InputField from '../../../components/UI/InputField/InputField'; 

import * as actions from '../../../store/actions/index'; 

import classes from './Login.module.css'; 
import globalStyles from '../../../assets/GlobalStyles/GlobalStyles.module.css'; 

class Login extends Component {

	constructor(props){
		super(props);
		this.state = {
			email: '', 
			password: '',
			forgotPasswordEmail: '',
			showModal: false,
			showNotification: false,
			notificationType: null,
			notificationMessage: null
		}
		setTimeout(() => {
			if(document.getElementById("emailField") != null){
				document.getElementById("emailField").focus();	
			}
		}, 1);
	}

	onChangeInputField = (event, target) => {
		this.setState({[target]: event.target.value}); 
	}

	onLoginFormSubmit = (event) => {
		event.preventDefault(); 
		if(!this.state.email || !this.state.password){
			this.showNotification('error', 'Vänligen fyll i dina uppgifter');
		}else{
			this.props.getCredentials(this.state.email, this.state.password);
		}
	}

	onClickForgotPassword = () => {
		this.setState({showModal: true}); 	
		document.getElementById("forgotPasswordInputField").focus();	
	}

	onForgotPasswordFormSubmit = (event) => {
		event.preventDefault();
		if(!this.state.forgotPasswordEmail){
			this.showNotification('error', 'Vänligen fyll i din email-address');
		}else{
			this.props.recoverPassword(this.state.forgotPasswordEmail).then(() => {
				if(!objectIsEmpty(this.props.resetPasswordErrorMessage)){
					this.showNotification('error', this.props.resetPasswordErrorMessage);
				}else{
					this.showNotification('info', this.props.resetPasswordMessage);
					this.closeModal(); 
				}
			});
		}
	}

	closeModal = () => {
		this.setState({showModal: false, forgotPasswordEmail: ''}); 
	}

	showNotification = (type, message) => {
		if(!this.state.showNotification){
			this.setState({ showNotification: true, 
							notificationType: type, 
							notificationMessage: message});			
			setTimeout(() => {
		      this.setState({showNotification: false});
		    }, 3000);
		}
	}

	logStateAndProps = () => {
		console.log('state', this.state);
		console.log('props', this.props);
	}

	render(){
		return (
			<Aux>
				<h2>Logga in</h2>
				<div className={ classes.LoginFieldsOuterContainer }>



					{ !objectIsEmpty(this.props.credentials) ? <Redirect to={ '/site-groups' } /> : null }

					{ this.props.loading ? <Spinner /> : null }

					<Notification 
						show={ this.state.showNotification }
						type={ this.state.notificationType }>
							{this.state.notificationMessage}
					</Notification>

					<Modal 
						show={ this.state.showModal }
						clicked={ this.closeModal }
						identifier={ 'modal-forgot-password' }
						minWidth={ '40%' }>

						<div className={ classes.ModalInnerContainer }>
							<p>Vänligen fyll i din E-mail address så skickar vi en länk som du använder för att återställa ditt lösenord.</p>

							<form className={ classes.LoginFieldsForm } onSubmit={ this.onForgotPasswordFormSubmit }>
								
								<InputField 
									identifier={ 'forgotPasswordInputField' }
									type={ 'email' }
									placeHolder={ 'E-mail' }
									onChangeInputField={ (event) => this.onChangeInputField(event, 'forgotPasswordEmail') }
									value={ this.state.forgotPasswordEmail }
								/>

								<button className={ [globalStyles.Material, globalStyles.Button, classes.Button].join(' ') } type='submit' >
									<span className={ classes.ButtonText }>Logga in</span>
								</button>
							</form>
						</div>

					</Modal>

					<div className={ [globalStyles.Material, classes.LoginFieldInnerContainer].join(' ') }>
						<form className={ classes.LoginFieldsForm } onSubmit={ this.onLoginFormSubmit }>
							<InputField 
								identifier={ 'emailField' }
								type={ 'email' }
								placeHolder={ 'E-mail' }
								onChangeInputField={ (event) => this.onChangeInputField(event, 'email') }
								value={ this.state.email } />

							<InputField 
								identifier={ 'passwordField' }
								type={ 'password' }
								placeHolder={ 'Lösenord' }
								onChangeInputField={ (event) => this.onChangeInputField(event, 'password') }
								autoComplete={ true }
								value={ this.state.password } />

							<button className={ [globalStyles.Material, globalStyles.Button, classes.Button].join(' ') } type='submit' >
								<span className={ classes.ButtonText }>Logga in</span>
							</button>

						</form>

						<p className={ classes.ForgotPasswordParagraph } onClick={ this.onClickForgotPassword }>Glömt lösenord?</p>

					</div>
					
				</div>
			</Aux>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		credentials: state.authReducer.credentials,
		loginErrorMessage: state.authReducer.loginErrorMessage,
		loading: state.authReducer.loading,
		resetPasswordMessage: state.authReducer.resetPasswordMessage,
		resetPasswordErrorMessage: state.authReducer.resetPasswordErrorMessage
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getCredentials: (email, password) => dispatch(actions.getCredentials(email, password)),
		recoverPassword: (email) => dispatch(actions.recoverPassword(email))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
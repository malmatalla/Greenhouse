import React, { Component } from 'react'; 
import  { connect } from 'react-redux'; 
import { withRouter } from 'react-router'; 

import Aux from '../../hoc/ReactAux/ReactAux'; 

import Spinner from '../../components/UI/Spinner/Spinner'; 
import SitesButtonContainer from './SitesButtonContainer/SitesButtonContainer'; 

import * as actions from '../../store/actions/index'; 

import classes from './Sites.module.css'; 

class Sites extends Component {

	constructor(props) {
		super(props);
		const apiKey = 'abc123'; 
		this.props.getSites(this.props.match.params.siteGroupKey, apiKey);
	}

	logProps = () => {
		console.log(this.props);
	}

	render(){
		return(
			<Aux>
				<h2 onClick={ this.logProps }>Installationer</h2>
				<div className={ classes.SitesContainer }>
					{ this.props.loading ? <Spinner /> : null }
					<SitesButtonContainer history={ this.props.history } sites={ this.props.sites } allSensors={false} />
				</div>

				<br /> <br />

				<h2 onClick={ this.logProps }>Översikt, alla sensorer</h2>
				<div className={ classes.SitesContainer }>
					{ this.props.loading ? <Spinner /> : null }
					<SitesButtonContainer history={ this.props.history } sites={ this.props.sites } allSensors={true} />
				</div>
			</Aux>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		sites: state.siteReducer.sites,
		sensorValues: state.sensorReducer.values,
		loading: state.siteReducer.loading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getSites: (siteGroupKey, apiKey) => dispatch(actions.getSites(siteGroupKey, apiKey)), 
		getLatestSensorValues: (siteKey, apiKey) => dispatch(actions.getLatestSensorValues(siteKey, apiKey))
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sites));
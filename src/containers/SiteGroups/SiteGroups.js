import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 

import Aux from '../../hoc/ReactAux/ReactAux'; 
import { objectIsEmpty } from '../../shared/utility.js'; 

import SiteGroup from './SiteGroup/SiteGroup'; 
import Spinner from '../../components/UI/Spinner/Spinner'; 

import classes from './SiteGroups.module.css'; 

import * as actions from '../../store/actions/index'; 

class SiteGroups extends Component {

	constructor(props) {
		super(props);
		if(!objectIsEmpty(this.props.credentials)){
			this.props.getSiteGroups(this.props.credentials.email, 'abc123');
		}else{
			console.log('Should never be possible to be here.');
			this.props.getSiteGroups(this.props.credentials.email, 'abc123');
		}
	}

	onClickSitesGroup = (siteGroupId) => {		
		const path = '/sites/' + siteGroupId; 
		this.props.history.replace(path); 
	}

	render(){
		let siteGroups = []; 
		for(let i = 0; i < this.props.siteGroups.length; i++){
			siteGroups.push(<SiteGroup 
								siteGroupName={ this.props.siteGroups[i].name } 
								clicked={() => this.onClickSitesGroup(this.props.siteGroups[i].siteGroupKey) }
								siteGroup={ this.props.siteGroups[i] }
								key={ this.props.siteGroups[i].siteGroupKey } />); 
		}
		return(
			<Aux>
				<h2>Installationsgrupper</h2>
				<div className={ classes.SiteGroupsContainer }>

					{this.props.loading ? <Spinner /> : null}

					<div className={ classes.SitesGroupsInnerContainer }>				
						{siteGroups}
					</div>
				</div>
			</Aux>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		credentials: state.authReducer.credentials,
		siteGroups: state.siteReducer.siteGroups,
		loading: state.siteReducer.loading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getSiteGroups: (userId, apiKey) => dispatch(actions.getSiteGroups(userId, apiKey)), 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteGroups); 
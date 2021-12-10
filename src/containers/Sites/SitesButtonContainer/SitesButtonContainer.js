import React from 'react'; 

import SitesButton from './SitesButton/SitesButton'; 

import classes from './SitesButtonContainer.module.css'; 

const sitesButtonContainer = (props) => {
	let sitesButtons = []; 
	if(props.sites){
		for(var i = 0; i < props.sites.length; i++){
			sitesButtons.push(<SitesButton history={ props.history } site={props.sites[i]} key={ 'sitesdbutton-' + props.sites[i].siteKey } allSensors={ props.allSensors } />);
		}
	}
	return (
		<div className={ classes.SitesButtonContainer }>
			{sitesButtons}
		</div>
	)
}

export default sitesButtonContainer; 

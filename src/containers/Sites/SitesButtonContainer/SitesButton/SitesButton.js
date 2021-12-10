import React from 'react'; 

import classes from './SitesButton.module.css'; 
import globalClasses from '../../../../assets/GlobalStyles/GlobalStyles.module.css';

const sitesButton = (props) => {

	const onButtonClick = () => {
		if(!props.allSensors){
			const path = '/cultivation-cabinet/' + props.site.siteKey; 
			props.history.replace(path); 
		}else{
			const path = '/site-all-sensors/' + props.site.siteKey; 
			props.history.replace(path); 
		}
	}

	return (
		<div className={ [classes.Column, classes.SitesButton, globalClasses.Material, globalClasses.Button].join(' ')} 
			 key={ 'sites-button-' + props.site.siteKey } 
			 sitekey={ props.site.siteKey }
			 onClick={ onButtonClick }>

			<div className={ classes.SitesButtonHeaderContainer }>
				<h4>{ props.site.name }</h4>
			</div>
			
			{Object.keys(props.site).map((keyValue,i)=>{
	            return (
	            	<div className={ classes.SitePropertyValueContainer } key={ 'sites-button-property-value-' + keyValue + '-' + props.site[keyValue] }>
	            		<div className={ classes.SitePropertyContainer }>
	            			{keyValue}
	            		</div>
	            		<div className={ classes.SiteValueContainer }>
	            			{props.site[keyValue]}
	            		</div>
	            	</div>
	            )    
	        })}   
		</div>
	);
}

export default sitesButton;
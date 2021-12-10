import React from 'react'; 

import classes from './SiteGroup.module.css'; 
import globalStyles from '../../../assets/GlobalStyles/GlobalStyles.module.css'; 

const siteGroup = (props) => (
    <div className={ [globalStyles.Material, globalStyles.Button, classes.SiteGroup].join(' ')} 
		 onClick={ props.clicked }>

		<div className={ classes.SiteGroupHeaderContainer }>
			<h4>{ props.siteGroupName }</h4>
		</div>
		
		{Object.keys(props.siteGroup).map((keyValue,i)=>{
            return (
            	<div className={ classes.SiteGroupPropertyValueContainer } key={ 'sitegroup-property-value-container-' + i }>
            		<div className={ classes.SiteGroupPropertyContainer }>
            			<p>{keyValue}</p>
            		</div>
            		<div className={ classes.SiteGroupValueContainer }>
            			<p>{props.siteGroup[keyValue]}</p>
            		</div>
            	</div>
            )    
        })}   
	</div>
)

export default siteGroup; 
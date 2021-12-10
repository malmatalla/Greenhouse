import React from 'react'; 

import * as classes from './DeviceRow.module.css'; 

import globalClasses from '../../../assets/GlobalStyles/GlobalStyles.module.css';

const device = (props) => {
	return (
		<li 
			className={ [classes.DeviceRowContainer, globalClasses.Material, globalClasses.Button].join(' ') } 
			onClick={ props.listItemClicked }
			sitekey={ props.sitekey }
			devicekey={ props.devicekey }
			name={ props.name }
			description={ props.description }
			devicetypekey={ props.devicetypekey }
			status={ props.status }>

			<p>{ props.name }</p>

		</li>
	);
}

export default device; 
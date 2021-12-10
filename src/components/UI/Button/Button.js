import React from 'react'; 

import * as classes from './Button.module.css'; 
import globalClasses from '../../../assets/GlobalStyles/GlobalStyles.module.css';

const button = (props) =>  {
	let style = {backgroundColor: '#69B320'};
	if(props.intention === 'negative'){
		style = {backgroundColor: 'red'};
	}

	return(
		<div className={ [classes.ButtonBody, globalClasses.Material, globalClasses.Button].join(' ') } style={ style } onClick={ props.clicked }>
			<p>{ props.children }</p>
		</div>
	)
}

export default button; 
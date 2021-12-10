import React from 'react'; 

import classes from'./VerticalButtonGroup.module.css'; 

import globalClasses from '../../../assets/GlobalStyles/GlobalStyles.module.css'; 

const verticalButtonGroup = (props) => {
	let buttons = []; 
	if(props.buttons){
		for(let i = 0; i < props.buttons.length; i++){
			buttons.push(<div className={ [globalClasses.Material, globalClasses.Button, classes.VerticalButton].join(' ') } onClick={ props.buttons[i].clicked } key={ props.buttons[i].key } style={ props.additionalCSSRules }>
							<p>{ props.buttons[i].buttonText }</p>
						 </div>);
		}
	}
	return(
		<div className={ classes.VerticalButtonGroupContainer }>
			{ buttons }
		</div>
	)
}

export default verticalButtonGroup; 
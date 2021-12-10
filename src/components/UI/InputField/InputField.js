import React from 'react'; 

import classes from './InputField.module.css'; 

const inputField = (props) => {
	return(
		<input 
			id={ props.identifier }
			className={ classes.InputField } 
			type={ props.type } 
			placeholder={ props.placeHolder } 
			autoComplete={ props.autocomplete ? "on" : "off" }
			value={ props.value ? props.value : '' }
			onChange={ props.onChangeInputField } /> 
	)
}

export default inputField; 
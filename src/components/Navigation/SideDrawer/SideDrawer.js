import React from 'react'; 

import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop'; 
import Aux from '../../../hoc/ReactAux/ReactAux'; 

import classes from './SideDrawer.module.css'; 

const sideDrawer = (props) => {
	let attachedClasses = [classes.SideDrawer, classes.Close]; 
	if(props.open){
		attachedClasses = [classes.SideDrawer, classes.Open];
	}
	return (
		<Aux>
			<Backdrop show={props.open} clicked={props.clicked}/>
			<div className={attachedClasses.join(' ')} onClick={props.clicked}>
				<NavigationItems credentials={ props.credentials } />
			</div>
		</Aux>
	); 
}; 

export default sideDrawer; 
import React from 'react'; 
import { withRouter } from 'react-router-dom'; 

import NavigationItems from '../NavigationItems/NavigationItems'; 

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

import classes from './Toolbar.module.css'; 

const toolbar = (props) => {	
	const onHeaderClicked = () => {
		const path = '/'; 
		props.history.replace(path); 
	}
	return(
		<header className={ classes.Header }>
			<DrawerToggle show={ props.show } clicked={ props.clicked } />
			<h3 onClick={ onHeaderClicked }>Greenhouse</h3>
			<nav className={ classes.DesktopOnly }>
				<NavigationItems credentials={props.credentials} />
			</nav>
		</header>
	)
}; 

export default withRouter(toolbar);
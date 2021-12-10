import React from 'react'; 
import { NavLink, withRouter } from 'react-router-dom'

import classes from './NavigationItem.module.css';
import globalStyles from '../../../../assets/GlobalStyles/GlobalStyles.module.css'; 

const navigationItem = (props) => {
	/*Since NavLink only styles the anchor-tag it places inside of the parent element, we need inline-styling for active listitems*/
	const activeListItemStyle = {
		backgroundColor: '#69b32033'
	};

	const getIsActiveStatus = (path) => {
		return props.location.pathname === props.link ? activeListItemStyle : {}
	}

	return(
		<li className={ [classes.NavigationItem, 
				globalStyles.Material, 
				globalStyles.Button].join(' ') } 
				style={getIsActiveStatus(props.link)}>
			<NavLink 
				to={props.link} 
				exact
				aria-current='page'
				activeClassName={ classes.ActiveNavigationItem }>{props.children}</NavLink>
		</li>
	)	
};

export default withRouter(navigationItem);
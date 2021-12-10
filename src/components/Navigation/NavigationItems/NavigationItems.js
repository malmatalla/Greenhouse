import React from 'react'; 

import { objectIsEmpty } from '../../../shared/utility'; 

import Aux from '../../../hoc/ReactAux/ReactAux';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
	return <ul className={classes.NavigationItems}>
		
		{!objectIsEmpty(props.credentials) 
			? (
				<Aux>
					<NavigationItem link='/site-groups'>Site groups</NavigationItem>
					<NavigationItem link='/logout'>Logga ut</NavigationItem>
				</Aux>
			  )
			: <NavigationItem link='/login'>Logga in</NavigationItem>
		}
	</ul>
};

export default navigationItems; 
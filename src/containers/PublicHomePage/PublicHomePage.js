import React from 'react'; 

import { lorem, halfLorem } from '../../assets/Lorem_Ipsum/Lorem_Ipsum.js'; 

import classes from './PublicHomePage.module.css'; 

const publicHomePage = () => {
	return <div className={ classes.PublicHomePageOuterContainer }>
		<div className={ [classes.Column, classes.LeftColumn].join(' ') }>
			<p className={ classes.Text }>{ lorem }</p>
		</div>

		<div className={ [classes.Column, classes.RightColumn].join(' ') }>
			<div className={ [classes.Row, classes.Image].join(' ') }></div>
			<div className={ classes.Row }>
				<p className={ classes.Text }>{ halfLorem }</p>
			</div>
		</div>
	</div>
}

export default publicHomePage;
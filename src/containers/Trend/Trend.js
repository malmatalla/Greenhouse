import React from 'react'; 

import trendUp from '../../assets/icons/trend-up.png'; 
import trendDown from '../../assets/icons/trend-down.png'; 
import trendSame from '../../assets/icons/trend-same.png'; 

const trend = (props) => {
	let trendIcon; 
	if(props.trend === 'up'){
		trendIcon = trendUp;
	}else if(props.trend === 'down'){
		trendIcon = trendDown;
	}else{
		trendIcon = trendSame;
	}
	return (
		<img src={ trendIcon } alt={ props.trend } />
	)
}

export default trend; 
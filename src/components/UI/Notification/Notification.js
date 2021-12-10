import React from 'react'; 

import notificationCheck from '../../../assets/icons/notification/check.png'; 
import notificationError from '../../../assets/icons/notification/error.png';
import notificationInfo from '../../../assets/icons/notification/info.png';
import classes from './Notification.module.css'; 

const notification = (props) => {

	/*
	USAGE
	showNotification = (type) => {
		if(!this.state.showNotification){
			this.setState({showNotification: true, notificationType: type});			
			setTimeout(() => {
		      this.setState({showNotification: false});
		    }, 3000);
		}
	}
	*/

	let type; 
	let icon; 
	switch(props.type) {
	  case "success":
	      type = classes.Success;
	      icon = notificationCheck;
	    break;
	  case "error":
	      type = classes.Error;
	      icon = notificationError;
	    break;
	   case "info":
	      type = classes.Info;
	      icon = notificationInfo;
	    break;
	  default:
	      type = classes.Info;
	      icon = notificationInfo;
	}

	return (
		 props.children ? 
			 (<div className={  [classes.NotificationContainer, type, props.show ? classes.Active : null].join(' ') } >
				<div className={ classes.NotificationBody }>
					<img src={ icon } alt={ props.type } className={ classes.NotificationIcon } />
					<div className={ classes.NotificationText }>{ props.children }</div>
				</div>
				<div className={ classes.ProgressBar }></div>
			</div>)
		 : null 
	)
}

export default notification; 
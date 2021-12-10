import React, {Component} from 'react';

import classes from './Modal.module.css'; 
import Aux from '../../../hoc/ReactAux/ReactAux'; 
import Backdrop from '../Backdrop/Backdrop'; 

class Modal extends Component {

	shouldComponentUpdate(nextProps, nextState){
		return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
	}

	render(){
		return (
			<Aux>
				<Backdrop show={this.props.show} clicked={this.props.clicked} />
				<div 
					className={classes.Modal}
					style={{
						transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
						opacity: this.props.show ? '1' : 0,
						minWidth: this.props.minWidth ? this.props.minWidth : null,
						left: this.props.left ? this.props.left : null,
					}}
					id={ this.props.identifier }
					>
					<br />
					{ this.props.children } 
				</div>
			</Aux>
		)
	}
}

export default Modal; 
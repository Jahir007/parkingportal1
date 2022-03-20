import React from 'react';
import {useHistory} from 'react-router-dom';
// import classes from './Button.module.css';
import {useAppContext} from '../../AppContext';

const Button = (props) => {
	const {switchAuthModeHandler} = useAppContext();
	const history = useHistory();

	const clickHandler = () => {
		history.push('/auth');
	};

	return (
		<div >
		<button  type="button" className = 'btn-outline-dark btn-lg mb-3' 
			onClick = {() => {switchAuthModeHandler(props.text); clickHandler();}}>
			<span>{props.text}</span>
		</button>
		</div>
	);
};

export default Button;
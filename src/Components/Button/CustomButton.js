import React from "react";
import styles from './CustomButton.module.css';

// Review: have default values for all non-styling parameters
// Review: have small but meaningful prop names
export default function Button({
	children,
	width,
	height,
	color,
	bgColor,
	onClick = () => {},
	type = 'submit',
	disabled = false
}) {

	const customStyle = {
		cursor: disabled ? 'not-allowed' : 'pointer',
		width: width,
		height: height,
		color: color,
		backgroundColor: bgColor
		// cursor: selectionComplete ? 'default' : 'not-allowed'
	};

	return (
		<button className={styles.btn} style={customStyle} onClick={onClick} type={type} disabled={disabled}>
			{children}
		</button>
	);
}

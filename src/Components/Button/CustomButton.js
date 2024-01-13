import React from "react";

export default function Button({
	children,
	widthParameter,
	heightParameter,
	colorParameter,
	bgColor,
	onClick = () => {},
	type = 'submit',
	disabled = false
}) {

	const defaultStyles = {
		width: "150px",
		height: "40px",
		color: "#ffffff",
		backgroundColor: "#141544",
		cursor: disabled ? 'not-allowed' : 'pointer',
		borderRadius: '5px',
		border: '0px'
	};

	const customStyle = {
		...defaultStyles,
		width: widthParameter || defaultStyles.width,
		height: heightParameter || defaultStyles.height,
		color: colorParameter || defaultStyles.color,
		backgroundColor: bgColor || defaultStyles.backgroundColor
		// cursor: selectionComplete ? 'default' : 'not-allowed'
	};

	return (
		<button style={customStyle} onClick={onClick} type={type} disabled={disabled}>
			{children}
		</button>
	);
}

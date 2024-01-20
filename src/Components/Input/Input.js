import React from 'react';
import styles from './Input.module.css';

const Input = ({
	label = '',
	labelAlignment = 'top',	// top | left
	type,
	id,
	name,
	value,
	checked,
	width,
	height,
	onChange,
	placeholder = 'Enter here'
}) => {

	const customStyle = {
		width: width,
		height: height
	};

	return (
		<>
			<div className={styles.inputContainer}>
				{label !== '' ?
					labelAlignment == 'left' ?
						<span>
							{label != '' ? <label className={styles.lableCss} htmlFor={id}>{label}</label> : <></>}
						</span> :
						<div>
							{label != '' ? <label className={styles.lableCss} htmlFor={id}>{label}</label> : <></>}
						</div>
					: <></> }
				<span>
					<input className={styles.inputBox} style={customStyle} type={type} id={id} name={name} value={value}
						onChange={onChange} checked={checked} placeholder={placeholder} />
				</span>
			</div>
		</>
	);
};

export default Input;
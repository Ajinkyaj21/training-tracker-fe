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
	onChange
}) => {
	// const customStyle = {
	// 	width: "200px",
	// 	height: "40px"
	// };
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
					<input className={styles.inputBox} type={type} id={id} name={name} value={value}
						onChange={onChange} checked={checked}
						placeholder='Enter here'
					/>
				</span>
			</div>
		</>
	);
};

export default Input;
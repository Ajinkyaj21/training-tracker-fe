import React from "react";
import styles from './Dropdown.module.css';

export default function CustomDropdown({
	dropdownOptions = [],
	value = '',
	setValue = () => {},
	defaultText = '-- Select --',
	handleSelectChange = () => {}
}) {

	const customStyle = {
	};

	return (
		<select style={customStyle} className={styles.dropdownStyle} value={value}
			onChange={(event) => handleSelectChange(event, setValue)}>
			<option value="" disabled>{defaultText}</option>
			{dropdownOptions?.map((option, i) => (
				<option key={i} value={option.value}>{option.label}</option>
			))}
		</select>
	);
}
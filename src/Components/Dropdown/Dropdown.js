import React from "react";
import { THEME } from "../../utils/theme";

export default function CustomDropdown({
	dropdownOptions = [],
	value = '',
	setValue = () => {},
	defaultText = '-- Select --',
	handleSelectChange = () => {}
}) {

	const defaultStyles = {
		backgroundColor: THEME.DROPDOWN.PRIM_BG_COLOR,
		borderRadius: THEME.DROPDOWN.PRIM_BORDER_RADIUS,
		padding: '5px',
		cursor: 'pointer'
	};

	const customStyle = {
		...defaultStyles
	};

	return (
		<select style={customStyle} value={value} onChange={(event) => handleSelectChange(event, setValue)}>
			<option value="" disabled>{defaultText}</option>
			{dropdownOptions?.map((option, i) => (
				<option key={i} value={option.value}>{option.label}</option>
			))}
		</select>
	);
}
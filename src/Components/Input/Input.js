import React from 'react';
import styles from './Input.module.css';
export const Input = ({ label, type, id, name, value, checked, onChange }) => {
	// const customStyle = {
	// 	width: "200px",
	// 	height: "40px"
	// };
	return (
		<>
			{label != '' ? <label className={styles.lableCss} htmlFor={id}>{label}</label> : <></>}
			{type === 'checkbox' ? (
				<input type={type} id={id} name={name}
					checked={checked} onChange={onChange} />
			) : (
				<input className={styles.inputBox} type={type} id={id} name={name} value={value} onChange={onChange} placeholder='Enter Here'

				/>
			)}
		</>
	);
};

// import React from 'react';

// export const Input = ({
// 	label = '',
//   type = 'text',
//   id = '',
//   name = '',
//   value = '',
//   width = '500px',
//   checked = false,
//   onChange = () => {}
// }) => {
//   return (
//     <>
//       {label !== '' ? <label htmlFor={id}>{label}</label> : <></>}
//       {type === 'checkbox' ? (
//         <input type={type} id={id} name={name} checked={checked} width= {width}onChange={onChange} />
//       ) : (
//         <input
//           type={type}
//           id={id}
//           name={name}
//           value={value}
// 		  width={width}
//           onChange={onChange}
//           placeholder='Enter Here'
//           className=''
// 				/>
//       )}
//     </>
//   );
// };


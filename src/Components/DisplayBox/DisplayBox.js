import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './DisplayBox.module.css';
export default function DisplayBox({ logo, name, description, lastUpdate }) {
	const navigate = useNavigate();
	const handleVisit = () => {
		navigate(`/course/${name}`, { state: { logo, name, description, lastUpdate } });
	};
	return (
		<div className={styles.displayBox}>
			<img src={logo} alt="Logo" className={styles.logo} />
			<div className={styles.name}>{name}</div>
			<p className={styles.description}>{description}</p>
			<div className={styles.lowerPart}>
				<a className={styles.visit} onClick={handleVisit}>Visit</a>
				<div className={styles.lastUpdate}>Last Upadted On:<br/>{lastUpdate}</div>
			</div>

		</div>
	);
}
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Tooltip as ReactTooltip} from 'react-tooltip';
import i from '../../Assets/info.svg';
import Button from '../Button/CustomButton';
import styles from './DisplayBox.module.css';

export default function DisplayBox({ id, logo, name, description, lastUpdate}) {
	const navigate = useNavigate();
	// const [isExpanded, setIsExpanded] = useState(false);
	const truncatedDescription = description?.length > 100
		? description.substring(0, 100) + '...'
		: description;
	// console.info(id);
	const handleVisit = () => {
		navigate(`/course/${id}`, { state: { id, logo, name, description, lastUpdate } });
	};
	// const toggleExpand = () => {
	// 	setIsExpanded(!isExpanded);
	// };

	const fullDescription = truncatedDescription;

	return (
		<div className={styles.displayBox}>
			<div className={styles.infoDiv}>
				{console.info(id, "display box id")}
				{/* <img src={i} alt="i" className={styles.info} data-tip="React-tooltip" />
				<ReactTooltip place="left" type="dark" effect="float"/> */}
				<img src={i} alt="i" className={styles.info} title={`Last Updated On: ${lastUpdate}`}/>
			</div>{
				// console.info(logo, "logo9999")
			}
			{/* <img src={logo && `data:image/svg+xml;base64,${logo}`} alt="Logo" className={styles.logo} /> */}
			<img src={logo} alt="Logo" className={styles.logo} />
			<div className={styles.name}>{name}</div>
			{/* <p className={styles.description}>{description}</p> */}
			<div className={ styles.descriptionContainer}>
				<p className={styles.description}>{fullDescription}</p>
				{/* {description?.length > 100 && (
					<div
						className={styles.readMoreButton}
						onClick={toggleExpand}
					>
						{isExpanded ? 'Read Less' : 'Read More'}
					</div>
				)} */}
			</div>
			<div className={styles.lowerPart}>
				<Button type="button" className="btn btn-primary" onClick={handleVisit}>Start Learning</Button>
				{/* <a className={styles.visit} onClick={handleVisit}>Visit</a> */}
				{/* <div className={styles.lastUpdate}>Last Upadted On:<br/>{lastUpdate}</div> */}
			</div>

		</div>
	);
}
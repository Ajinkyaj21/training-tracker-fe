import React from 'react';
import { Link } from 'react-router-dom';
import Article from '../../Assets/artical.png';
import Edit from '../../Assets/edit.png';
import Practice from '../../Assets/practice.png';
import Assignment from '../../Assets/upload.png';
import YouTube from '../../Assets/youtube.svg';
// import Edit from '../Modals/EditModal/Edit';
import styles from './CourseTable.module.css';
const CourseTable = ({ tableHead, tableData, setYoutubeSrc, handleFileUpload }) => {
	console.info(tableData, 'vv');
	// const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	// const openEditModal = () => {
	// 	setIsEditModalOpen(true);
	// };

	// const closeEditModal = () => {
	// 	setIsEditModalOpen(false);
	// };

	const imageColumns = {
		Article: Article,
		Youtube: YouTube,
		Practice: Practice,
		Assignments: Assignment,
		Edit: Edit
	};

	const handleDownload = (url) => {
		const link = document.createElement('a');
		link.href = url;
		link.setAttribute('download', '');
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const handleEditClick = (row) => {
		console.info(row, "edit row");
	};

	return (
		<>
			<table className={styles.table}>
				<thead>
					<tr>
						{tableHead.map((header, index) => (
							<th key={index} className={styles.tableHeader}>{header.lable}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{tableData.map((row, rowIndex) => (
						<tr key={rowIndex} className={styles.tableRow}>
							{tableHead.map((header, cellIndex) => (
								<td key={cellIndex} className={styles.tableCell}>
									{header.key in imageColumns ? (
										header.key === 'Edit' ? (
											<img
												src={Edit}
												alt="Edit"
												className={styles.image}
												onClick={() => handleEditClick(row)}
												data-bs-toggle="modal"
												data-bs-target="#exampleModalEdit"
											/>
										) : row[header.key] ? (
											header.key === 'Youtube' ? (
												<Link
													type="button"
													className="btn btn-link"
													data-bs-toggle="modal"
													data-bs-target="#exampleModalVideo"
													onClick={() => setYoutubeSrc(row[header.key])}
												>
													<img
														src={imageColumns[header.key]}
														alt={header.key}
														className={styles.image}
													/>
												</Link>
											) : header.key === 'Practice' ? (
												<img
													src={imageColumns[header.key]}
													alt={header.key}
													className={styles.image}
													onClick={() => handleDownload(row[header.key])}
												/>
											) : header.key === 'Assignments' ? (
												<>
													<img
														src={imageColumns[header.key]}
														alt={header.key}
														className={styles.image}
														onClick={() =>
															document.getElementById(`fileInput-${rowIndex}`).click()}
													/>
													<input
														type="file"
														id={`fileInput-${rowIndex}`}
														style={{ display: 'none' }}
														onChange={(e) => handleFileUpload(e, rowIndex)}
													/>
												</>
											) : (
												<Link to={row[header.key]} target='_blank'>
													<img
														src={imageColumns[header.key]}
														alt={header.key}
														className={styles.image}
													/>
												</Link>
											)
										) : ''
									) : (
										row[header.key] !== null ? row[header.key] : ''
									)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			{/* <Edit isOpen= {isEditModalOpen} onClose={closeEditModal}></Edit> */}
		</>
	);
};

export default CourseTable;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Article from '../../Assets/artical.png';
// import Edits from '../../Assets/edit.png';
// import Practice from '../../Assets/practice.png';
// import Assignment from '../../Assets/upload.png';
// import YouTube from '../../Assets/youtube.svg';
// import Edit from '../Modals/EditModal/Edit';
// import styles from './CourseTable.module.css';
// const CourseTable = ({ tableHead, tableData, setYoutubeSrc, handleFileUpload }) => {
// 	console.info(tableData, 'vv');
// 	const [isEditModalOpen, setIsEditModalOpen] = useState(false);

// 	const openEditModal = () => {
// 		setIsEditModalOpen(true);
// 	};

// 	const closeEditModal = () => {
// 		setIsEditModalOpen(false);
// 	};

// 	const imageColumns = {
// 		Article: Article,
// 		Youtube: YouTube,
// 		Practice: Practice,
// 		Assignments: Assignment,
// 		Edit: Edits
// 	};

// 	const handleDownload = (url) => {
// 		const link = document.createElement('a');
// 		link.href = url;
// 		link.setAttribute('download', '');
// 		document.body.appendChild(link);
// 		link.click();
// 		document.body.removeChild(link);
// 	};

// 	const handleEditClick = (row) => {
// 		console.info(row, "edit row");
// 	};

// 	return (
// 		<>
// 			<table className={styles.table}>
// 				<thead>
// 					<tr>
// 						{tableHead.map((header, index) => (
// 							<th key={index} className={styles.tableHeader}>{header.lable}</th>
// 						))}
// 					</tr>
// 				</thead>
// 				<tbody>
// 					{tableData.map((row, rowIndex) => (
// 						<tr key={rowIndex} className={styles.tableRow}>
// 							{tableHead.map((header, cellIndex) => (
// 								<td key={cellIndex} className={styles.tableCell}>
// 									{header.key in imageColumns ? (
// 										header.key === 'Edit' ? (
// 											<img
// 												src={Edits}
// 												alt="Edit"
// 												className={styles.image}
// 												onClick={handleEditClick(row)}
// 												data-bs-toggle="modal"
// 												data-bs-target="#exampleModalEdit"
// 											/>
// 										// 	<img
// 										// 	src={Edits}
// 										// 	alt="Edit"
// 										// 	className={styles.image}
// 										// 	onClick={openEditModal}
// 										// 	// data-bs-toggle="modal"
// 										// 	// data-bs-target="#exampleModalEdit"
// 										// />
// 										) : row[header.key] ? (
// 											header.key === 'Youtube' ? (
// 												<Link
// 													type="button"
// 													className="btn btn-link"
// 													data-bs-toggle="modal"
// 													data-bs-target="#exampleModalVideo"
// 													onClick={() => setYoutubeSrc(row[header.key])}
// 												>
// 													<img
// 														src={imageColumns[header.key]}
// 														alt={header.key}
// 														className={styles.image}
// 													/>
// 												</Link>
// 											) : header.key === 'Practice' ? (
// 												<img
// 													src={imageColumns[header.key]}
// 													alt={header.key}
// 													className={styles.image}
// 													onClick={() => handleDownload(row[header.key])}
// 												/>
// 											) : header.key === 'Assignments' ? (
// 												<>
// 													<img
// 														src={imageColumns[header.key]}
// 														alt={header.key}
// 														className={styles.image}
// 														onClick={() =>
// 															document.getElementById(`fileInput-${rowIndex}`).click()}
// 													/>
// 													<input
// 														type="file"
// 														id={`fileInput-${rowIndex}`}
// 														style={{ display: 'none' }}
// 														onChange={(e) => handleFileUpload(e, rowIndex)}
// 													/>
// 												</>
// 											) : (
// 												<Link to={row[header.key]} target='_blank'>
// 													<img
// 														src={imageColumns[header.key]}
// 														alt={header.key}
// 														className={styles.image}
// 													/>
// 												</Link>
// 											)
// 										) : ''
// 									) : (
// 										row[header.key] !== null ? row[header.key] : ''
// 									)}
// 								</td>
// 							))}
// 						</tr>
// 					))}
// 				</tbody>
// 			</table>
// 			{/* <Edit isOpen= {isEditModalOpen} onClose={closeEditModal}></Edit> */}
// 		</>
// 	);
// };

// export default CourseTable;
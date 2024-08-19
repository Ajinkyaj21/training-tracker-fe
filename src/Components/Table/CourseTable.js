import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import EditModal from '../../Components/Modals/EditModal/EditModal';
import { updateStatusForTopic } from '../../Services/Api';
import styles from './CourseTable.module.css';
const CourseTable = ({ tableHead, tableData, openVideoModal, setYoutubeSrc, setEditData, editData, getTopics, id}) => {
	const isAdmin = localStorage.getItem('adminToken');
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(null);

	const handleEditClick = (rowData, rowIndex) => {
		setEditData(rowData);
		setCurrentIndex(rowIndex);
		setIsEditModalOpen(true);
	};

	const handleEditSubmit = (updatedData) => {
		console.info(updatedData, 'Updated Data');

		getTopics();
	};
	const handleStatusChange = async(rowIndex, event) => {
		const newStatus = event.target.value;
		try {
			const statusData = {
				id: tableData[rowIndex].topic_id,
				status: newStatus
			};
			const res = await updateStatusForTopic(statusData);
			console.info(res);
			getTopics();
		} catch (err) {
			console.info(err);
		}
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
									{header.key === 'srNo' ? (
										rowIndex + 1
									) : header.type === "videoLink" ? (
										<>
											<img
												src={header.imgsrc}
												alt=""
												className={`${styles.image} ${(row[header.key] === "" || row[header.key] === null) ? styles.fadedImage : ""}`}
												onClick={() => {
													if (row[header.key]) {
														setYoutubeSrc(row[header.key]);
														openVideoModal();
													}
												}}
												style={{ cursor: row[header.key] ? 'pointer' : 'not-allowed' }}
											/>
											<Tooltip id="video-tooltip" place="top" effect="solid">
												Watch Video
											</Tooltip>
										</>
									) : header.type === "imageLink" ? (
										<>
											<Link to={row && row[header.key]} target='_blank' style={{ pointerEvents: row[header.key] ? 'auto' : 'none' }}>
												<img
													src={header.imgsrc}
													alt=""
													className={`${styles.image} ${(row[header.key] === "" || row[header.key] === null) ? styles.fadedImage : ""}`}
												/>
											</Link>
											<Tooltip id="image-tooltip" place="top" effect="solid">
												View Image
											</Tooltip>
										</>
									) : header.type === "practiceLink" ? (
										<>
											<Link to={row && row[header.key]} target='_blank' style={{ pointerEvents: row[header.key] ? 'auto' : 'none' }}>
												<img
													src={header.imgsrc}
													alt="Practice Doc"
													className={`${styles.image} ${(row[header.key] === "" || row[header.key] === null) ? styles.fadedImage : ""}`}
												/>
											</Link>
											<Tooltip id="practice-doc-tooltip" place="top" effect="solid">
													Practice Doc
											</Tooltip>
										</>
									) : header.key === 'status' ? (
										<select
											value={tableData ? tableData[rowIndex].status : ""}
											onChange={(e) => handleStatusChange(rowIndex, e)}
											className={styles.dropdown}
										>
											<option value="" disabled selected>Select Status</option>
											<option value="Not Started">Not Started</option>
											<option value="In Progress">In Progress</option>
											<option value="Complete">Complete</option>
										</select>
									) : header.key === 'Edit' && isAdmin == 1 ? (
										<>
											<img
												src={header.imgsrc}
												alt="Edit"
												className={styles.image}
												onClick={() => handleEditClick(row, rowIndex)}
												style={{ cursor: 'pointer' }}
												title="Edit"
											/>
											<Tooltip id="edit-tooltip" place="top" effect="solid">
												Edit
											</Tooltip>
										</>
									) : (
										row[header.key]
									)}

								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			<EditModal
				isOpen={isEditModalOpen}
				onClose={() => setIsEditModalOpen(false)}
				editData={editData}
				handleEditSubmit={handleEditSubmit}
				getTopics={getTopics}
				currentIndex={currentIndex}
				id={id}
			/>
		</>
	);
};

export default CourseTable;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EditModal from '../../Components/Modals/EditModal/EditModal';
import styles from './CourseTable.module.css';

const CourseTable = ({ tableHead, tableData, openVideoModal, setYoutubeSrc, setEditData, editData, getTopics, id}) => {
	const isAdmin = localStorage.getItem('adminToken');
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	const handleEditClick = (rowData) => {
		setEditData(rowData);
		setIsEditModalOpen(true);
	};

	const handleEditSubmit = (updatedData) => {
		console.info(updatedData, 'Updated Data');

		getTopics();
	};
	const handleStatusChange = (rowIndex, event) => {
		const newStatus = event.target.value;
		const updatedData = [...tableData];
		updatedData[rowIndex].status = newStatus;
        // Update the tableData state or send the updated status to the backend
        // For example: updateTableData(updatedData);
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
									{header.key === 'srNo' ?
										rowIndex + 1 :
										header.type === "videoLink" ?
											<img
												src={header.imgsrc}
												alt=""
												className={styles.image}
												onClick={() => {
													setYoutubeSrc(row[header.key]);
													openVideoModal(row[header.key]);
												}}
												style={{ cursor: 'pointer' }}
											/>
											: header.type === "imageLink" ?
												<Link to={row && row[header.key]} target='_blank'>
													<img src={header.imgsrc} alt="" className={styles.image} />
												</Link>
												: header.key === 'status' ?
													<select
														value={row.status || ''}
														onChange={(e) => handleStatusChange(rowIndex, e)}
														className={styles.dropdown}
													>
														<option value="">Select Status</option>
														<option value="Complete">Complete</option>
														<option value="Incomplete">Incomplete</option>
														<option value="In Progress">In Progress</option>
													</select>
													: header.key === 'Edit' && isAdmin == 1 ?
														<img
															src={header.imgsrc}
															alt="Edit"
															className={styles.image}
															onClick={() => handleEditClick(row)}
															style={{ cursor: 'pointer' }}
														/>
														:
														row[header.key]
									}
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
				id={id}
			/>
		</>
	);
};

export default CourseTable;

import React from 'react';
import styles from './CourseTable.module.css';
const CourseTable = ({ tableHead, tableData }) => {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					{tableHead.map((header, index) => (
						<th key={index} className={styles.tableHeader}>{header}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{tableData.map((row, rowIndex) => (
					<tr key={rowIndex} className={styles.tableRow}>
						{row.map((cell, cellIndex) => (
							<td key={cellIndex} className={styles.tableCell}>{cell}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default CourseTable;

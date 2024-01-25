import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { fetchTraineeDataOld } from "../../Services/Api";
import stylesOldT from "./OldTrainee.module.css";

const OldTrainee = ({ searchQuery }) => {
	const [trainees, setTrainees] = useState([]);
	const navigate = useNavigate();
	const fetchDataFromAPI = async () => {
		const data = await fetchTraineeDataOld();
		setTrainees(data.result);
	};

	useEffect(() => {
		fetchDataFromAPI();
	}, []);

	const filteredTrainees = trainees.filter((trainee) =>
		trainee.trainee_name.toLowerCase().includes(searchQuery?.toLowerCase())
	);
	const handleRowClick = (trainee) => {
		console.info(`Clicked on trainee: ${trainee.trainee_name}`);
		navigate('/traineeDetails');
	};

	return (
		<>

			<div>

				<table className={stylesOldT.trainees_table}>
					<thead className={stylesOldT.table_head} style={{ position: "sticky", top: "0" }}>
						<tr>
							<th style={{ width: "200px" }}>Name</th>
							<th style={{ width: "100px" }}>Technology</th>
							<th style={{ width: "50px" }}>Completed %</th>
							<th style={{ width: "200px" }}>Trained by</th>
							<th style={{ width: "50px" }}>Unresolved comments</th>
							<th style={{ width: "50px" }}>Unreviewed comments</th>
							<th style={{ width: "50px" }}>Activities not Started</th>
							<th style={{ width: "50px" }}>Activities Delay</th>
							<th style={{ width: "100px" }}>Start Date</th>
							<th style={{ width: "100px" }}>End Date</th>
						</tr>
					</thead>
					<tbody className={stylesOldT.scrollable_body} style={{ maxHeight: "300px", overflowY: "auto" }} >
						{filteredTrainees.length > 0 && filteredTrainees.map((trainee, k) => (
							<tr key={k}
								onClick={() => handleRowClick(trainee)}
								style={{ cursor: "pointer", textAlign: "center" }}>
								<td> {trainee.trainee_name}</td>
								<td>{trainee.technology}</td>
								<td>{trainee.Completed_Activities_Percentage}</td>
								<td>{trainee.trained_by}</td>
								<td>{trainee.unresolved_comments}</td>
								<td>{trainee.ununreviewed_statusresolved_comments}</td>
								<td>{trainee.activities_not_started}</td>
								<td>{trainee.delayed_activities}</td>
								<td>{trainee.start_date}</td>
								<td>{trainee.due_Date}</td>

							</tr>
						))}
					</tbody>
				</table>

			</div>
		</>
	);
};

export default OldTrainee;

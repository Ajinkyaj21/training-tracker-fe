import React, { useEffect, useState } from "react";
import { fetchTraineeDataOld } from "../../Services/Api";
import stylesOldT from "./OldTrainee.module.css";

const OldTrainee = ({ searchQuery }) => {
	const [trainees, setTrainees] = useState([]);
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
	return (
		<>

			<div>

				<table className={stylesOldT.trainees_table}>
					<thead className={stylesOldT.table_head} style={{ position: "sticky", top: "0" }}>
						<tr>
							<th>Name</th>
							<th>Technology</th>
							<th>Completed %</th>
							<th>Trained by</th>
							<th>Unresolved comments</th>
							<th>Unreviewed comments</th>
							<th>Activities not Started</th>
							<th>Activities Delay</th>
							<th>Start Date</th>
							<th>End Date</th>
						</tr>
					</thead>
					<tbody className={stylesOldT.scrollable_body} style={{ maxHeight: "300px", overflowY: "auto" }} >
						{filteredTrainees.length > 0 && filteredTrainees.map((trainee, k) => (
							<tr key={k}>
								<td> {trainee.trainee_name}</td>
								<td>{trainee.trained_by}</td>
								<td>{trainee.unresolved_comments}</td>
								<td>{trainee.delayed_activities}</td>

								<td>{trainee.activities_not_started}</td>
								<td>{trainee.ununreviewed_statusresolved_comments}</td>
								<td>{trainee.Completed_Activities_Percentage}</td>
								<td>{trainee.start_date}</td>
								<td>{trainee.due_Date}</td>
								<td>{trainee.technology}</td>
							</tr>
						))}
					</tbody>
				</table>

			</div>
		</>
	);
};

export default OldTrainee;

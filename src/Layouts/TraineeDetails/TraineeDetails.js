// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import {fetchTraineeDataActiveUser } from "../../Services/Api";

// export default function TraineeDetails() {
// 	const { id } = useParams();
// 	const [traineeDetails, setTraineeDetails] = useState(null);

// 	useEffect(() => {
// 		const fetchDetails = async () => {
// 			const details = await fetchTraineeDataActiveUser(id);
// 			setTraineeDetails(details);
// 		};

// 		fetchDetails();
// 	}, [id]);

// 	if (!traineeDetails) {
// 		return <div>Loading...</div>;
// 	}
// 	const traineeDetail = {
// 		1: { id: 1, 'trainee_name': "Trainee 1", technology: "React" },
// 		2: { id: 2, 'trainee_name': "Trainee 2", technology: "Angular" }
// 	};

// 	return (
// 		<div>
// 			<h2>{traineeDetail.trainee_name}</h2>
// 			<p>hrllo</p>
// 		</div>
// 	);
// } //old
// import React from "react";
// import { useLocation } from "react-router-dom";

// const TraineeDetails = () => {
// 	const location = useLocation();
// 	if (!location.state || !location.state.trainee) {
// 		return <div>Error: Trainee data is missing</div>;
// 	}
// 	const { trainee } = location.state;

// 	return (
// 		<div>
// 			<h2>Trainee Details</h2>
// 			<p>Name: {trainee.trainee_name}</p>
// 			<p>Technology: {trainee.technology}</p>
// 			<p>Completed %: {trainee.Completed_Activities_Percentage}</p>
// 			<p>Trained by: {trainee.trainer_name}</p>
// 			<p>Unresolved Comments: {trainee.unresolved_comments}</p>
// 			<p>Unreviewed Comments: {trainee.unreviewed_status}</p>
// 			<p>Activities Not Started: {trainee.activities_not_started}</p>
// 			<p>Activities Delay: {trainee.delayed_activities}</p>
// 			<p>Start Date: {trainee.start_date}</p>
// 			<p>End Date: {trainee.due_Date}</p>
// 		</div>
// 	);
// };

// export default TraineeDetails;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTraineeDataActiveUser } from '../../Services/Api';

export default function TraineeDetails() {
	const [filteredData, setfilteredData] = useState();
	const {traineeId} = useParams();
	useEffect(() => {
		const tempFilterData = async () => {
			const data = await fetchTraineeDataActiveUser();
			const trainee = data.result.filter(trainee => trainee.trainee_name === trainee.trainee_name);
			setfilteredData(trainee);

		};
		tempFilterData();

	}, [traineeId]);

	return (
		<>
			<div>TraineeDetails {traineeId}</div>

			{
				filteredData && (
					<div>
						<p>Name: {filteredData.trainee_name}</p>
						<p>Technology: {filteredData.technology}</p>
						<p>Completed %: {filteredData.Completed_Activities_Percentage}</p>
						<p>Trained by: {filteredData.trainer_name}</p>
						<p>Unresolved Comments: {filteredData.unresolved_comments}</p>
						<p>Unreviewed Comments: {filteredData.unreviewed_status}</p>
						<p>Activities Not Started: {filteredData.activities_not_started}</p>
						<p>Activities Delay: {filteredData.delayed_activities}</p>
						<p>Start Date: {filteredData.start_date}</p>
						<p>End Date: {filteredData.due_Date}</p>
					</div>
				)
			}
		</>

	);
}


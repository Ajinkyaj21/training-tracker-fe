import React, {useEffect} from 'react';
// import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { fetchTraineeDetails } from "../../Services/Api";

export default function TraineeDetails() {
	const { id } = useParams();
	// const [traineeDetails, setTraineeDetails] = useState(null);

	useEffect(() => {
		const fetchDetails = async () => {
			// const details = await fetchTraineeDetails(id);
			// setTraineeDetails(details);
		};

		fetchDetails();
	}, [id]);

	// if (!traineeDetails) {
	// 	return <div>Loading...</div>;
	// }
	const traineeDetail = {
		1: { id: 1, 'trainee_name': "Trainee 1", technology: "React" },
		2: { id: 2, 'trainee_name': "Trainee 2", technology: "Angular" }
	};

	return (
		<div>
			<h2>{traineeDetail.trainee_name}</h2>
		</div>
	);
}

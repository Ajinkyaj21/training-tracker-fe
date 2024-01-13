import React from "react";
import { useNavigate } from 'react-router-dom';
import TrainingStyles from "./Training.module.css";
const Trainingcards = ({ activities, language }) => {
	const navigate = useNavigate();

	const handleEditClick = (activity) => {
		navigate(`/edit`, { state: { trainee: activity } });
	};

	return (
		<div className={TrainingStyles.cards}>
			<div className={TrainingStyles.language}>
				<h2>{language}</h2>
			</div>
			{activities.map((activity, index) => (
				<div className={TrainingStyles.mainCards} key={index}>
					<div className={TrainingStyles.div1}>
						<p>Activity Name:{activity.activity_name}</p>
						<p>Status: {activity.status_name}</p>
					</div>
					<div className={TrainingStyles.sepration}>
						<div className={TrainingStyles.div2}>
							<p>Topic: {activity.topic_name}</p>
							<p>Due Date: {activity.due_date}</p>
							<p>Comments: {activity.comments}</p>
						</div>
						<div className={TrainingStyles.div3}>
							<p>Sub-topic: {activity.sub_topic_name}</p>
							<p>Start Date: {activity.start_date}</p>
						</div>
						<div className={TrainingStyles.div4}>
							<p>Description: {activity.activity_description}</p>
							<a href={activity.resource_link} target="_blank" rel="noopener noreferrer">
								Resource Link
							</a>
						</div>
					</div>
					<div className={TrainingStyles.editbtn}>
						<button className={TrainingStyles.btnEdit} onClick={() => handleEditClick(activity)}>
							Edit
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Trainingcards;

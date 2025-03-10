import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Components } from "../../Components";
import { getActivities, saveActivities, tech, trainee } from "../../Services/Api";
import stylesAT from "./AllocateTraining.module.css";
// import { Button } from "bootstrap";
// import { Button } from "bootstrap";

const AllocateTraining = () => {
	const [selectedTrainee, setSelectedTrainee] = useState("");
	const [selectedTrainer, setSelectedTrainer] = useState("");
	const [selectedTechnology, setSelectedTechnology] = useState("");
	// Review: rename trial to something more meaningful like persons
	const [trial, setTrial] = useState([]);
	const [technologyOptions, setTechnologyOptions] = useState([]);
	const [activites, setActivites] = useState([]);
	const [requiredStates, setRequiredStates] = useState(activites.map(() => true));
	const [activityDueDates, setActivityDueDates] = useState([]);
	const [selectionComplete, setSelectionComplete] = useState(false);
	// const [allDueDatesFilled, setAllDueDatesFilled] = useState(false);

	useEffect(() => {
		handleSubmit();
		fetchTechnologyOptions();
	}, []);

	const dropdownParams = [
		{
			name: "-- Select Trainee --",
			options: trial,
			selectedValue: selectedTrainee,
			setSelectedValue: setSelectedTrainee

		},
		{
			name: "-- Select Trainer --",
			options: trial,
			selectedValue: selectedTrainer,
			setSelectedValue: setSelectedTrainer
		},
		{
			name: "-- Select Technology --",
			options: technologyOptions,
			selectedValue: selectedTechnology,
			setSelectedValue: setSelectedTechnology
		}
	];

	const handleRequiredChange = (index) => {
		setRequiredStates((prevRequiredStates) => {
			const updatedRequiredStates = [...prevRequiredStates];
			updatedRequiredStates[index] = !updatedRequiredStates[index];
			return updatedRequiredStates;
		});
	};

	const checkSelectionStatus = () => {
		if (selectedTrainee && selectedTrainer && selectedTechnology) {
			setSelectionComplete(true);
		} else {
			setSelectionComplete(false);
		}
		// console.info(selectionComplete);
	};

	const handleSelectChange = (event, setSelectedState) => {
		setSelectedState(event.target.value);
		checkSelectionStatus();
	};

	const handleSubmit = async () => {
		try {
			const response = await trainee();
			const temp = response.result.map((el) => ({
				label: el.user_name,
				value: el.user_id
			}));
			setTrial(temp);
		} catch (error) {
			console.error("Error posting data:", error);
		}
	};

	const fetchTechnologyOptions = async () => {
		try {
			const techResponse = await tech();
			const temp2 = techResponse.result.map((el) => ({
				label: el.technology,
				value: el.tech_id
			}));
			setTechnologyOptions(temp2);
		} catch (error) {
			console.error("Error fetching technology data:", error);
		}
	};
	const allDueDatesFilled = activityDueDates.every((date) => date.trim() !== "");
	// const handleSelectChange = (event, setSelectedState) => {
	// 	setSelectedState(event.target.value);
	// };

	const handleGetActivities = async () => {

		if ( selectedTrainee && selectedTrainer && selectedTechnology) {
			try {
				const responseActivites = await getActivities(
					selectedTrainee,
					selectedTrainer,
					selectedTechnology
				);

				if (responseActivites !== null) {
					const activitiesres = responseActivites;
					// console.log("activitiesres", activitiesres);
					setActivites(activitiesres.result);
					const initialDueDates = new Array(activitiesres.length).fill("");
					setActivityDueDates(initialDueDates);
				} else {
					console.error("Error getting activities:", responseActivites.statusText);
				}
			} catch (error) {
				console.error("Error getting activities:", error);
			}
		} else {
			toast.error("Please select values for all dropdowns before getting activities.");
		}
	};

	const handleSave = async () => {
		if (activites.length > 0) {
			const dataToSend = {
				"tech_id": selectedTechnology,
				"trainee_id": selectedTrainee,
				"trainer_id": selectedTrainer,
				activities: activites.map((activity, index) => ({
					"activity_id": activity.activity_id,
					"due_date": activityDueDates[index],
					required: requiredStates[index] ? 1 : 0
				}))
			};
			try {
				const response = await saveActivities(dataToSend);
				alert('DATA SAVED SUCCESSFULLY.....');
				if (response.result.data.isDuplicate === true || response.result.status !== 200) {
					toast.error("The data has already been added.he data has already been added he data has already been added");
				} else {
					toast.success("Data saved successfully!");
					resetForm();
				}

			} catch (error) {
				alert("DATA ALREADY EXIST");
				toast.error("No activities to save.");
				console.error("Error saving data -", error);
			}
		} else {
			toast.error("No activities to save.");
		}
	};

	const resetForm = () => {
		setTrial([]);
		setTechnologyOptions([]);
		setActivites([]);
		setRequiredStates([]);
		setActivityDueDates([]);
	};

	// Review: This component is not at all responsive
	// Review: Instead of bootstrap this could have easily been handled with plain css
	/* Review: Use bootstrap only for row and columns at page level and don't use in components.
		It makes things complex than required.*/
	return (
		<div className="container">
			<div className={stylesAT.getActContainer}>
				<div>
					{dropdownParams.map((d, i) => (
						<span key={i} className={stylesAT.getActDropdownsLayout}>
							<Components.CustomDropdown dropdownOptions={d.options} value={d.selectedValue}
								setValue={d.setSelectedValue} handleSelectChange={handleSelectChange}
								defaultText={d.name} />
						</span>
					))}
				</div>
				<div>
					<Components.CustomButton className={`${stylesAT.actBtn} `} type="button" onClick={handleGetActivities} disabled={!selectionComplete} >Get Activities</Components.CustomButton>
				</div>
			</div>
			<div className="row">
				<div className="col">
					{/* Review: Use proper classnames */}
					<div className={stylesAT.actBox}>
						{activites.length > 0 ? (
							<table className={`${stylesAT.tableMain} table m-2`}>
								<thead className="thead-dark">
									<tr>
										<th className={stylesAT.th} scope="row">Trainee</th>
										<th className={stylesAT.th} scope="row">Trainer</th>
										<th className={stylesAT.th} scope="row">Technology</th>
										<th className={stylesAT.th} scope="row">Topic</th>
										<th className={stylesAT.th} scope="row">Sub Topic</th>
										<th className={stylesAT.th} scope="row">Activity</th>
										<th className={stylesAT.th} scope="row">Due Date</th>
										<th className={stylesAT.th} scope="row">Required</th>
									</tr>
								</thead>
								<tbody>
									{activites.map((activity, index) => (
										<tr key={index}>
											{index === 0 && (
												<>
													<td rowSpan={activites.length} className={stylesAT.tdInner}>
														{trial?.map((el) => {
															if (el.value == selectedTrainee) {
																return <>{el.label}</>;
															} else {
																return null;
															}
														})}
													</td>
													<td rowSpan={activites.length} className={stylesAT.tdInner}>
														{trial?.map((el) => {
															if (el.value == selectedTrainer) {
																return <>{el.label}</>;
															} else {
																return null;
															}
														})}
													</td>
													<td rowSpan={activites.length} className={stylesAT.tdInner}>
														{activity.technology}
													</td>
												</>
											)}
											<td className={stylesAT.td}>{activity.topic}</td>
											<td className={stylesAT.td}>{activity.sub_topic}</td>
											<td className={stylesAT.td}>{activity.activity}</td>
											<td className={stylesAT.td}>
												<input type="date" name="dueDate" value={activityDueDates[index]} onChange={(e) => {
													const newDueDates = [...activityDueDates];
													newDueDates[index] = e.target.value;
													// allDueDatesFilled();
													setActivityDueDates(newDueDates);
												}}/>
											</td>
											<td className={stylesAT.td}>
												<input type="checkbox" name="required" checked={requiredStates[index]}
													onChange={() => handleRequiredChange(index)}/>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						) : (
							<p className={stylesAT.p}>
								No activities to display. Please click , Get Activities to fetch data.
							</p>
						)}
						{activites.length > 0 && (
							<div className={stylesAT.mainDiv}>
								<div className={stylesAT.btnDiv}>
									<Components.CustomButton className={` ${stylesAT.saveBtn}`} type="button" onClick={handleSave} disabled={!allDueDatesFilled}> Save </Components.CustomButton>
								</div>
								<div className={stylesAT.messageDiv}>{!allDueDatesFilled && (
									<p className={stylesAT.errorText}>
									Please enter due dates for all activities before saving.
									</p>
								)}</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllocateTraining;

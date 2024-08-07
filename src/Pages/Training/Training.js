import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import EditIcon from '../../Assets/editIcon.svg';
// import { Components } from "../../Components";
import ViewMoreIcon from '../../Assets/viewMore.svg';
import tableData from '../../samplePayload/data';
import {
	fetchTraineeDataTrainingCards,
	fetchTraineeDataTrainingDropDown
} from "../../Services/Api";
import TrainingStyles from "./Training.module.css";

const TablePage = ({ setData }) => {
	const [trainees, setTrainees] = useState([]);
	const [selectedValue, setSelectedValue] = useState(-1);
	const [showAllTrainees, setShowAllTrainees] = useState([]);
	const [allTraineeKeys, setAlltraineeKeys] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);
	const [selectedItem, setSelectedItem] = useState(null);
	const [searchQuery, setSearchQuery] = useState("");
	// const [searchQuery, setSearchQuery] = useState("");
	const navigate = useNavigate();
	// console.info(tableData, 'vaishnavi');
	console.info(allTraineeKeys, 'allTraineeKeys');
	const fetchDataFromAPI = async () => {
		try {
			const dataAll = await fetchTraineeDataTrainingDropDown();
			console.info(dataAll.result, "response data");
			setTrainees(dataAll.result);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	useEffect(() => {
		const fetchDataFromAPIDisplay = async () => {
			try {
				const dataA = await fetchTraineeDataTrainingCards(selectedValue);
				console.info(dataA.result, "table data");
				setShowAllTrainees(dataA.result);
				setAlltraineeKeys(Object.keys(dataA.result));
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchDataFromAPIDisplay();
	}, [selectedValue]);

	useEffect(() => {
		fetchDataFromAPI();
	}, []);

	const handleSelectChange = (event) => {
		// const newValue = event.target.value;
		const newValue = parseInt(event.target.value);
		setSelectedValue(newValue);
	};
	const handleEdit = (id) => {
		const updatedData = paginatedData?.find((item) => item?.training_plan_id === id);
		setData(updatedData);
		navigate(`/edit/${id}`);

	};
	/*-----------------*/
	// const fetchDataFromAPIDisplay = async (statusId) => {
	// 	try {
	// 		const dataA = await fetchTraineeDataTrainingCards(statusId);
	// 		setShowAllTrainees(dataA.result);
	// 		setAlltraineeKeys(Object.keys(dataA.result));
	// 	} catch (error) {
	// 		console.error("Error fetching data:", error);
	// 	}
	// };
	// useEffect(() => {
	// 	if (selectedValue !== -1) {
	// 		fetchDataFromAPIDisplay(selectedValue);
	// 	}
	// }, [selectedValue]);
	/*--------------*/
	const itemsPerPage = 7;

	const handlePageClick = ({ selected }) => {
		setCurrentPage(selected);
	};
	const handleViewMore = (item) => {
		setSelectedItem(item);
	};

	const filteredData = showAllTrainees.filter(item =>
		item.activity_name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const startIndex = currentPage * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	// const paginatedData = showAllTrainees.slice(startIndex, endIndex);
	const paginatedData = filteredData.slice(startIndex, endIndex);
	console.info(paginatedData, 'vaish');

	return (
		<>
			<div className={TrainingStyles.main}>
				<div className={TrainingStyles.firstDiv}>
					<div className={TrainingStyles.input}>
						<div>

							<input className={TrainingStyles.inputTypeText}
								type="text"
								placeholder="Search Activity Name"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>

						</div>

					</div>
					<div className={TrainingStyles.selectBox}>
						<select value={selectedValue} onChange={handleSelectChange}>
							{/* <option value={-1}>All</option> */}
							{trainees.map((trainee) => (
								<option key={trainee.status_id} value={trainee.status_id}>
									{trainee.status}
								</option>
							))}
						</select></div>

				</div>

			</div>
			<br/>

			<div>

				<table className={TrainingStyles.trainees_table}>
					<thead className={TrainingStyles.table_head} style={{ position: "sticky", top: "0" }}>
						<tr>
							<th>ID</th>
							<th>Technology</th>
							<th>Activity Name</th>
							<th>Topic</th>
							<th>Subtopic</th>
							<th>Start Date</th>
							<th>End Date</th>
							<th>Due Date</th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody className={TrainingStyles.scrollable_body} style={{ maxHeight: "300px", overflowY: "auto" }}>
						{paginatedData?.map((item, index) => (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{item.tech}</td>
								<td>{item.activity_name}</td>
								<td>{item.topic_name}</td>
								<td>{item.sub_topic_name}</td>
								<td>{item.start_date}</td>
								<td>{item.due_date}</td>
								<td>{item.end_date}</td>
								<td>
									{/* <limk type="button" className="btn btn-link " data-bs-toggle="modal"
										data-bs-target="#exampleModal"
										 onClick={() => handleViewMore(item)}>View More</limk> */}
									<img src={ViewMoreIcon} alt='View More' onClick={() => handleViewMore(item)} className="btn btn-link " data-bs-toggle="modal"
										data-bs-target="#exampleModal"/>
								</td>
								<td>

									{/* <Components.CustomButton width='100%'
										onClick={() => handleEdit(item?.training_plan_id)}>
											Edit</Components.CustomButton> */}
									<img src={EditIcon} className={TrainingStyles.Icon} alt="Edit" onClick={() => handleEdit(item?.training_plan_id)} />

								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<ReactPaginate
				pageCount={Math.ceil(tableData.length / itemsPerPage)}
				pageRangeDisplayed={4}
				marginPagesDisplayed={2}
				onPageChange={handlePageClick}
				containerClassName={TrainingStyles.pagination}
				activeClassName={TrainingStyles.active}
			/>

			<div className="modal fade" id="exampleModal" tabIndex="-1"
				aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel"><b>Details</b></h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal"
								aria-label="Close"></button>
						</div>
						<div className="modal-body">
							{selectedItem && (
								<>
									<p><b>Comments : </b> <br/> {selectedItem.comments}</p>
									<p><b>Resource : </b><a href={selectedItem.resource_link} target="_blank" rel="noopener noreferrer">{selectedItem.resource_link}</a></p>
									<p><b>Activity Description :</b> <br/>{selectedItem.activity_description}</p>
									<p><b>Status:</b> <br/>{selectedItem.status_name}</p>
								</>
							)}
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
							{/* <button type="button" className="btn btn-primary">Save changes</button> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TablePage;

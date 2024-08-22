import React, { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
// import { useNavigate } from 'react-router-dom';
import { fetchTraineeDataActiveAdmin } from "../../Services/Api";
import { fetchTraineeDataActiveUser } from "../../Services/Api";
import stylesActiveT from "./ActiveSearch.module.css";

const ActiveTrainee = ({ searchQuery }) => {
	const [trainees, setTrainees] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);
	const [selectedTrainee, setSelectedTrainee] = useState(null);
	// const navigate = useNavigate();

	const isAdmin = localStorage.getItem('adminToken');

	useEffect(() => {
		const fetchDataFromAPI = async () => {
			let data;
			if (isAdmin == 1) {
				data = await fetchTraineeDataActiveAdmin();
			} else {
				data = await fetchTraineeDataActiveUser();
			}
			setTrainees(data.result);
		};
		fetchDataFromAPI();
	}, [isAdmin]);

	const filteredTrainees = trainees.filter((trainee) =>
		trainee.trainee_name.toLowerCase().includes(searchQuery.toLowerCase())
	);
	const itemsPerPage = 6;
	const handlePageClick = ({ selected }) => {
		setCurrentPage(selected);
	};
	const startIndex = currentPage * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	const handleRowClick = (trainee) => {
		setSelectedTrainee(trainee);
	};

	return (
		<>
			<div>
				<table className={stylesActiveT.trainees_table}>
					<thead className={stylesActiveT.table_head} style={{ position: "sticky", top: "0" }}>
						<tr>
							<th style={{ width: "180px" }}>Name</th>
							<th style={{ width: "100px" }}>Technology</th>
							<th style={{ width: "50px" }}>Completed %</th>
							<th style={{ width: "180px" }}>Trained by</th>
							<th style={{ width: "50px" }}>Unresolved comments</th>
							<th style={{ width: "50px" }}>Unreviewed comments</th>
							<th style={{ width: "50px" }}>Activities not Started</th>
							<th style={{ width: "50px" }}>Activities Delay</th>
							<th style={{ width: "100px" }}>Start Date</th>
							<th style={{ width: "100px" }}>End Date</th>
						</tr>
					</thead>
					<tbody
						className={stylesActiveT.scrollable_body}
						style={{ maxHeight: "300px", overflowY: "auto" }}
					>
						{filteredTrainees.slice(startIndex, endIndex).map((trainee, i) => (
							<tr
								key={i}
								onClick={() => handleRowClick(trainee)}
								style={{ cursor: "pointer", textAlign: "center" }}
								data-bs-toggle="modal"
								data-bs-target="#exampleModal"
							>
								<td>{trainee.trainee_name}</td>
								<td>{trainee.technology}</td>
								<td>{trainee.Completed_Activities_Percentage}</td>
								<td>{trainee.trainer_name}</td>
								<td>{trainee.unresolved_comments}</td>
								<td>{trainee.unreviewed_status}</td>
								<td>{trainee.activities_not_started}</td>
								<td>{trainee.delayed_activities}</td>
								<td>{trainee.start_date}</td>
								<td>{trainee.due_Date}</td>
							</tr>
						))}
					</tbody>
				</table>
				<br />
				<ReactPaginate
					pageCount={Math.ceil(filteredTrainees.length / itemsPerPage)}
					pageRangeDisplayed={4}
					marginPagesDisplayed={2}
					onPageChange={handlePageClick}
					containerClassName={stylesActiveT.pagination}
					activeClassName={stylesActiveT.active}
				/>
				<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">Trainee Details</h5>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body">
								{selectedTrainee && (
									<>
										<p>Name : {selectedTrainee.trainee_name}</p>
										<p>Technology : {selectedTrainee.technology}</p>
										<p>Completed % : {selectedTrainee.Completed_Activities_Percentage}</p>
										<p>Trained by :{selectedTrainee.trainer_name}</p>
										<p>Unresolved comments : {selectedTrainee.unresolved_comments}</p>
									</>
								)}
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ActiveTrainee;

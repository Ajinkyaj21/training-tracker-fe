import React, { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import {fetchTraineeDataOldAdmin } from "../../Services/Api";
import {fetchTraineeDataOldUser} from "../../Services/Api";
import stylesOldT from "./OldTrainee.module.css";

const OldTrainee = ({ searchQuery }) => {
	const [trainees, setTrainees] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);
	const navigate = useNavigate();
	const isAdmin = localStorage.getItem('adminToken');

	useEffect(() => {
		if (isAdmin == 1 ) {
			const fetchDataFromAPI = async () => {
				const data = await fetchTraineeDataOldAdmin();
				setTrainees(data.result);

			};
			fetchDataFromAPI();
		} else {
			const fetchDataFromAPI = async () => {
				const data = await fetchTraineeDataOldUser();
				setTrainees(data.result);

			};
			fetchDataFromAPI();
		}
	}, []);

	const filteredTrainees = trainees.filter((trainee) =>
		trainee.trainee_name.toLowerCase().includes(searchQuery?.toLowerCase())
	);
	const handleRowClick = (trainee) => {
		console.info(`Clicked on trainee: ${trainee.trainee_name}`);
		navigate('/traineeDetails');
	};
	const itemsPerPage = 7;
	const handlePageClick = ({ selected }) => {
		setCurrentPage(selected);
	};
	const startIndex = currentPage * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	console.info(endIndex);

	return (
		<>

			<div>

				<table className={stylesOldT.trainees_table}>
					<thead className={stylesOldT.table_head} style={{ position: "sticky", top: "0" }}>
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
					<tbody className={stylesOldT.scrollable_body} style={{ maxHeight: "300px", overflowY: "auto" }} >
						{filteredTrainees.length > 0 && filteredTrainees.map((trainee, k) => (
							<tr key={k}
								onClick={() => handleRowClick(trainee)}
								style={{ cursor: "pointer", textAlign: "center" }}>
								<td> {trainee.trainee_name}</td>
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
				<br/>
				<ReactPaginate
					pageCount={Math.ceil(filteredTrainees.length / itemsPerPage)}
					pageRangeDisplayed={4}
					marginPagesDisplayed={2}
					onPageChange={handlePageClick}
					containerClassName={stylesOldT.pagination}
					activeClassName={stylesOldT.active}
				/>

			</div>
		</>
	);
};

export default OldTrainee;

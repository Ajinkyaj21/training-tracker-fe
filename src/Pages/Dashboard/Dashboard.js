// import Chart from 'chart.js/auto';
import React, { useEffect, useState} from "react";
import { fetchDashboard } from "../../Services/Api";
import stylesDash from "./Dashboard.module.css";

const Dashboard = () => {
	const [trainees, setTrainees] = useState([]);
	const [selectedTechnology, setSelectedTechnology] = useState("All");
	// const [chartInstance, setChartInstance] = useState(null);
	const fetchDashboardAPI = async () => {
		const data = await fetchDashboard();
		console.info('res', data);
		setTrainees(data.result);
	};

	useEffect(() => {
		fetchDashboardAPI();
	}, []);

	const handleTechnologyClick = (technology) => {
		setSelectedTechnology(technology);
	};

	const getPercentageColor = (percentage) => {
		if (percentage <= 15) {
			return ['#FF5733'];
		} else if (percentage > 15 && percentage <= 20) {
			return ['#FFD700'];
		} else {
			return ['#28A745'];
		}
	};
	// const getHoverBackgroundColor = (percentage) => {
	// 	if (percentage <= 15) {
	// 		return ['#9934le'];
	// 	} else if (percentage > 15 && percentage <= 20) {
	// 		return ['#191500'];
	// 	} else {
	// 		return ['#186429'];
	// 	}
	// };
	// const renderPieChart = () => {
	// 	if (chartInstance) {
	// 		chartInstance.destroy(); // Destroy the previous chart instance
	// 	}
	// 	const canvas = document.getElementById('pieChart');
	// 	if (canvas) {
	// 		const context = canvas.getContext('2d');
	// 		context.clearRect(0, 0, canvas.width, canvas.height);
	// 	}
	// 	const data = {
	// 		labels: trainees.map(trainee => trainee.technology),
	// 		datasets: [{
	// 			data: trainees.map(trainee => trainee.percentage_of_activities),
	// 			backgroundColor: trainees.map(trainee => getPercentageColor(trainee.percentage_of_activities)),
	// 			hoverOffset: 2,
	// 			hoverBackgroundColor: trainees.map(trainee => getHoverBackgroundColor(trainee.percentage_of_activities))
	// 		}]
	// 	};
	// 	const ctx = document.getElementById('pieChart').getContext('2d');
	// 	const newChartInstance = new Chart(ctx, {
	// 		type: 'pie',
	// 		data: data,
	// 		options: {
	// 			responsive: true,
	// 			plugins: {
	// 				legend: {
	// 					display: false,
	// 					position: 'bottom'
	// 				}
	// 			}
	// 		}
	// 	});
	// 	setChartInstance(newChartInstance);
	// };

	// useEffect(() => {
	// 	if (trainees.length > 0) {
	// 		renderPieChart();
	// 	}
	// }, [trainees]);

	return (
		<div className={stylesDash.container}>
			<div className={stylesDash.contents}>
				<div className={stylesDash.cards}>
					{trainees.map((trainee, index) => (
						<div
							className={stylesDash.btn}
							key={index}
							onClick={() => handleTechnologyClick(trainee.technology)}
						>
							<div className={stylesDash.btn_div}>
								<div className={stylesDash.tech}>{trainee.technology}</div>
								<div className={`${stylesDash.percentage}
												${getPercentageColor(trainee.percentage_of_activities)}`}>
									{Math.round(trainee.percentage_of_activities)}%
								</div>
							</div>
						</div>
					))}
				</div>
				<div className={stylesDash.pieContainer}>
					{/* <div className={stylesDash.pie_chart_container}>
						<canvas id="pieChart"></canvas>
					</div> */}
				</div>
				{selectedTechnology && (
					<table className={stylesDash.table}>
						<thead className={stylesDash.table_head}>
							<tr>
								<th>Completed</th>
								<th>Progress</th>
								<th>Not Started</th>
								<th>Delayed</th>
								<th>Not Reviewed</th>
							</tr>
						</thead>
						<tbody>
							{trainees
								.filter((trainee) => trainee.technology === selectedTechnology)
								.map((selectedTrainee, index) => (
									<tr className={stylesDash.act} key={index}>
										<td>{selectedTrainee.completed}</td>
										<td>{selectedTrainee.in_progress}</td>
										<td>{selectedTrainee.not_started}</td>
										<td>{selectedTrainee.delayed_}</td>
										<td>{selectedTrainee.not_reviewed}</td>
									</tr>
								))}
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
};

export default Dashboard;

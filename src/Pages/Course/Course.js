import React from 'react';
// import DisplayBox from '../../Components/DisplayBox/DisplayBox';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
// import CourseTable from '../../Components/Table/CourseTable';
import Button from '../../Components/Button/CustomButton';
import AddTopic from '../../Components/Modals/AddTopic';
import CourseTable from '../../Components/Table/CourseTable';
import styles from './Course.module.css';

export default function Course() {
	const location = useLocation();
	const { logo, name } = location.state;
	const navigate = useNavigate();

	const handelBack = () => {
		navigate(`/LearningSpace`);
	};
	const tableHead = ["Topic", "Article", "YouTube", "Practice", "Assignments"];
	const tableData = [
		{
			topic: "Js Functions",
			articale: "()",
			youtube: ">",
			practice: "",
			asignments: "",
			name: " JS "
		},
		{
			topic: "Js events",
			articale: "()",
			youtube: ">",
			practice: "",
			asignments: "",
			name: " JS "
		},
		{
			topic: "Js loops",
			articale: "()",
			youtube: ">",
			practice: "",
			asignments: "",
			name: " JS"
		},
		{
			topic: " React loops",
			articale: "()",
			youtube: ">",
			practice: "",
			asignments: "",
			name: "REACT"
		},
		{
			topic: "MySQL operations",
			articale: "()",
			youtube: ">",
			practice: "",
			asignments: "",
			name: "MySQL"
		},
		{
			topic: "MySQL operations",
			articale: "()",
			youtube: ">",
			practice: "",
			asignments: "",
			name: "MySQL"
		},
		{
			topic: "CSS flexbox",
			articale: "()",
			youtube: ">",
			practice: "",
			asignments: "",
			name: "CSS"
		}

	];
	const filteredData = tableData.filter(item => item.name.trim().toUpperCase() === name.trim().toUpperCase());
	return (
		<div>
			<div className={styles.header}>
				<img src={logo} alt="Logo" className={styles.logo} width={"50px"} />
				<Button type="button" className={`${styles.addTopic}btn btn-primary`} data-toggle="modal" data-target="#addTopic">+ Add Topic</Button>
				<AddTopic />
			</div>
			<div className={styles.table}>
				<CourseTable tableHead={tableHead}
					// tableData={filteredData.map(({ name, ...rest }) => Object.values(rest))} />
					tableData={filteredData.map(({ ...rest }) => Object.values(rest))} />
			</div>
			<div className={styles.footer}>
				<Button onClick={handelBack} >Back</Button>
			</div>
			<div className="modal fade" id="addTopic" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
						...
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
							<button type="button" className="btn btn-primary">Save changes</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

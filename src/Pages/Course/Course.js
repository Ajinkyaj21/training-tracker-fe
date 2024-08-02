import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';
import Article from '../../Assets/artical.png';
import Edit from '../../Assets/edit.png';
import Practice from '../../Assets/openDocument.png';
import Upload from '../../Assets/upload.png';
import YouTube from '../../Assets/youtube.svg';
import Button from '../../Components/Button/CustomButton';
import AddParticularTopic from '../../Components/Modals/AddParticularTopic';
import AddTopic from '../../Components/Modals/AddTopic';
import CourseTable from '../../Components/Table/CourseTable';
import styles from './Course.module.css';

export default function Course() {
	const location = useLocation();
	// const { id, logo, name } = location.state || {};
	const { logo, name } = location.state || {};
	// const [isModalOpen, setIsModalOpen] = useState(false);
	const [assignments, setAssignments] = useState({});
	const navigate = useNavigate();

	const handelBack = () => {
		navigate(`/LearningSpace`);
	};

	// const openModal = () => {
	// 	setIsModalOpen(true);
	// };

	// const closeModal = () => {
	// 	setIsModalOpen(false);
	// };

	const link = 'https://www.youtube.com/embed/CKSdHsQyPYk?si=T6KU4ILrk5cE-xgM';
	const articleLink = 'https://www.w3schools.com/js/js_functions.asp';
	const practiceDocLink = '/30-days-of-react-ebook-fullstackio.pdf';
	// const tableHead = ["Id", "Topic", "Article", "YouTube", "Practice", "Assignments", "Edit"];
	const tableHead = [ {lable: "Id", key: "id"}, {lable: "Name", key: "name"}, {lable: "Topic", key: "topic"}, {lable: "Article", key: "articale"}, {lable: "YouTube", key: "youtube"}, {lable: "Practice", key: "practice"}, {lable: "Assignments", key: "assignments"}, {lable: "Edit", key: "edit"}];
	const tableData = [
		{ id: 1,
			name: " JS ",
			topic: "Js Functions", articale: <Link to={articleLink} target='_blank'><img src={Article} alt="Logo" className={styles.logo} width={"30px"} /></Link>,
			youtube: <Link type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#exampleModalVideo"><img src={YouTube} alt="Logo" className={styles.logo} width={"30px"} /></Link>,
			practice: <a href={practiceDocLink} download><img src={Practice} alt="Logo" className={styles.logo} width={"30px"} /></a>,
			asignments: <img src={Upload} alt="Logo" className={styles.logo} width={"30px"} onClick={() => handleUploadClick(1)} />,
			edit: <img src={Edit} alt="Logo" className={styles.logo} width={"30px"} />
		},
		{ id: 2,
			name: " JS ",
			topic: "Js events", articale: <Link to={articleLink} target='_blank'><img src={Article} alt="Logo" className={styles.logo} width={"30px"} /></Link>,
			youtube: <Link type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#exampleModalVideo"><img src={YouTube} alt="Logo" className={styles.logo} width={"30px"} /></Link>,
			practice: <a href={practiceDocLink} download><img src={Practice} alt="Logo" className={styles.logo} width={"30px"} /></a>,
			asignments: <img src={Upload} alt="Logo" className={styles.logo} width={"30px"} onClick={() => handleUploadClick(2)} />,
			edit: <img src={Edit} alt="Logo" className={styles.logo} width={"30px"} />

		},
		{ id: 3,
			name: " JS",
			topic: "Js loops", articale: <Link to={articleLink} target='_blank'><img src={Article} alt="Logo" className={styles.logo} width={"30px"} /></Link>,
			youtube: <Link type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#exampleModalVideo"><img src={YouTube} alt="Logo" className={styles.logo} width={"30px"} /></Link>,
			practice: <a href={practiceDocLink} download><img src={Practice} alt="Logo" className={styles.logo} width={"30px"} /></a>,
			asignments: <img src={Upload} alt="Logo" className={styles.logo} width={"30px"} onClick={() => handleUploadClick(3)} />,
			edit: <img src={Edit} alt="Logo" className={styles.logo} width={"30px"} />
		},
		{ id: 4,
			name: "REACT",
			topic: " React loops", articale: <Link to={articleLink} target='_blank'><img src={Article} alt="Logo" className={styles.logo} width={"30px"} /></Link>,
			youtube: <Link type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#exampleModalVideo"><img src={YouTube} alt="Logo" className={styles.logo} width={"30px"} /></Link>,
			practice: <a href={practiceDocLink} download><img src={Practice} alt="Logo" className={styles.logo} width={"30px"} /></a>,
			asignments: <img src={Upload} alt="Logo" className={styles.logo} width={"30px"} onClick={() => handleUploadClick(4)} />,
			edit: <img src={Edit} alt="Logo" className={styles.logo} width={"30px"} />

		},
		{ id: 5,
			name: "MySQL",
			topic: "MySQL operations", articale: <Link to={articleLink} target='_blank'><img src={Article} alt="Logo" className={styles.logo} width={"30px"} /></Link>,
			youtube: <Link type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#exampleModalVideo"><img src={YouTube} alt="Logo" className={styles.logo} width={"30px"} /></Link>,
			practice: <a href={practiceDocLink} download><img src={Practice} alt="Logo" className={styles.logo} width={"30px"} /></a>,
			asignments: <img src={Upload} alt="Logo" className={styles.logo} width={"30px"} onClick={() => handleUploadClick(5)} />,
			edit: <img src={Edit} alt="Logo" className={styles.logo} width={"30px"} />
		},
		{ id: 6,
			name: "MySQL",
			topic: "MySQL operations", articale: <Link to={articleLink} target='_blank'><img src={Article} alt="Logo" className={styles.logo} width={"30px"} /></Link>,
			youtube: <Link type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#exampleModalVideo"><img src={YouTube} alt="Logo" className={styles.logo} width={"30px"} /></Link>,
			practice: <a href={practiceDocLink} download><img src={Practice} alt="Logo" className={styles.logo} width={"30px"} /></a>,
			asignments: <img src={Upload} alt="Logo" className={styles.logo} width={"30px"} onClick={() => handleUploadClick(6)} />,
			edit: <img src={Edit} alt="Logo" className={styles.logo} width={"30px"} />
		},
		{ id: 7,
			name: "CSS",
			topic: "CSS flexbox", articale: <Link to={articleLink} target='_blank'><img src={Article} alt="Logo" className={styles.logo} width={"30px"} /></Link>,
			youtube: <Link type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#exampleModalVideo"><img src={YouTube} alt="Logo" className={styles.logo} width={"30px"} /></Link>,
			practice: <a href={practiceDocLink} download><img src={Practice} alt="Logo" className={styles.logo} width={"30px"} /></a>,
			asignments: <img src={Upload} alt="Logo" className={styles.logo} width={"30px"} onClick={() => handleUploadClick(7)} />,
			edit: <img src={Edit} alt="Logo" className={styles.logo} width={"30px"} />
		}
	];

	const [isAddTopicModalOpen, setIsAddTopicModalOpen] = useState(false);

	const openAddTopic = () => {
		setIsAddTopicModalOpen(true);
	};

	const closeAddTopicModal = () => {
		setIsAddTopicModalOpen(false);
	};

	const handleUploadClick = (index) => {
		document.getElementById(`fileInput-${index}`).click();
	};

	const onFileUpload = (e, index) => {
		const file = e.target.files[0];
		if (file) {
			setAssignments(prev => ({
				...prev,
				[index]: file
			}));
		}
	};

	const filteredData = tableData.filter(item => item.name?.trim().toUpperCase() === name?.trim().toUpperCase());

	const updatedTableData = filteredData.map((item) => ({
		...item,
		asignments: (
			<>
				<img src={Upload} alt="Logo" className={styles.logo} width={"30px"} onClick={() => handleUploadClick(item.id)} />
				<input
					type="file"
					id={`fileInput-${item.id}`}
					style={{ display: 'none' }}
					onChange={(e) => onFileUpload(e, item.id)}
				/>
				{assignments[item.id] && <span>{assignments[item.id].name}</span>}
			</>
		)
	}));

	return (
		<div>
			<div className={styles.header}>
				<div className={styles.courseName}>
					<img src={logo} alt="Logo" className={styles.logo} width={"50px"} />
					<div className={styles.name}>{name}</div>
				</div>

				<Button type="button" className={`${styles.addTopic}btn btn-primary`} data-toggle="modal" data-target="#addTopic" onClick={openAddTopic}>+ Add Topic</Button>
				<AddTopic />
			</div>
			<div className={styles.table}>
				<CourseTable
					tableHead={tableHead}
					tableData={updatedTableData.map(({ ...rest }) => Object.values(rest))}
				/>
			</div>
			<div className={styles.footer}>
				<Button onClick={handelBack} >Back</Button>
			</div>
			<AddParticularTopic isOpen={isAddTopicModalOpen} onClose={closeAddTopicModal} />
			<div className="modal" id="exampleModalVideo" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Modal title</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<iframe
								width="100%"
								height="450"
								src={link}
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

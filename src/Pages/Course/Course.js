import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { useNavigate, Link } from 'react-router-dom';
// import Article from '../../Assets/artical.png';
// import Edit from '../../Assets/edit.png';
// import Practice from '../../Assets/openDocument.png';
// import Upload from '../../Assets/upload.png';
// import YouTube from '../../Assets/youtube.svg';
// import Back from '../../Assets/back.png';
import Back from '../../Assets/back1.png';
import Button from '../../Components/Button/CustomButton';
import AddParticularTopic from '../../Components/Modals/AddParticularTopic';
import AddTopic from '../../Components/Modals/AddTopic';
import Edit from '../../Components/Modals/EditModal/Edit';
import CourseTable from '../../Components/Table/CourseTable';
import { getTopic } from '../../Services/Api';
import styles from './Course.module.css';

export default function Course() {
	const location = useLocation();
	// const { id, logo, name } = location.state || {};
	const { logo, name, description, id } = location.state || {};
	// const [isModalOpen, setIsModalOpen] = useState(false);
	// const [assignments, setAssignments] = useState({});
	const [youtubeSrc, setYoutubeSrc] = useState(null);
	const [displayTopic, setDisplayTopic] = useState([]);
	const [editData, setEditData] = useState({
		moduleName: '',
		description: '',
		visitDate: '',
		topic: '',
		article: '',
		youtubeLink: '',
		practice: '',
		assignments: ''
	});
	const isAdmin = localStorage.getItem('adminToken');
	useEffect(() => {
		console.info(editData, 'editdatas');
	}, [editData]);
	const navigate = useNavigate();

	console.info(id, "course page id");
	const handelBack = () => {
		navigate(`/LearningSpace`);
	};
	const getTopics = async() => {
		try {
			const res = await getTopic(id);
			console.info(res, "getTopicData");
			console.info(res.data.result, "res.data.result");
			setDisplayTopic(res.data.result);
		} catch {
			console.info("error");
		}
	};
	useEffect(() => {
		getTopics();
	}, [id]);

	// useEffect(() => {
	// 	console.info(displayTopic, 'displayTopic');
	// }, [displayTopic]);

	// const openModal = () => {
	// 	setIsModalOpen(true);
	// };

	// const closeModal = () => {
	// 	setIsModalOpen(false);
	// };
	const link = 'https://www.youtube.com/embed/CKSdHsQyPYk?si=T6KU4ILrk5cE-xgM';
	// const articleLink = 'https://www.w3schools.com/js/js_functions.asp';
	// const practiceDocLink = '/30-days-of-react-ebook-fullstackio.pdf';
	// const tableHead = ["Id", "Topic", "Article", "YouTube", "Practice", "Assignments", "Edit"];
	let tableHead;
	const tableHead1 = [{lable: "Sr No.", key: "tech_topic_id"}, {lable: "Topic Name", key: "topic"}, {lable: "Article", key: "Article"}, {lable: "Video Tutorial", key: "Youtube"}, {lable: "Practice Doc.", key: "Practice"}, {lable: "Upload Assignment", key: "Assignments"}, { label: "Edit", key: "Edit" }];
	const tableHead2 = [{lable: "Sr No.", key: "tech_topic_id"}, {lable: "Topic Name", key: "topic"}, {lable: "Article", key: "Article"}, {lable: "Video Tutorial", key: "Youtube"}, {lable: "Practice Doc.", key: "Practice"}, {lable: "Upload Assignment", key: "Assignments"}];
	if (isAdmin == 1) {
		tableHead = tableHead1;
	} else {
		tableHead = tableHead2;
	}
	const [isAddTopicModalOpen, setIsAddTopicModalOpen] = useState(false);

	const openAddTopic = () => {
		setIsAddTopicModalOpen(true);
	};

	const closeAddTopicModal = () => {
		setIsAddTopicModalOpen(false);
	};
	const handleFileUpload = (e, index) => {
		const file = e.target.files[0];
		if (file) {
			console.info(`File uploaded for row ${index}:`, file);
			// I think one api chahiye ye ass backend send krne keliye
		}
	};

	// const handleUploadClick = (index) => {
	// 	document.getElementById(`fileInput-${index}`).click();
	// };

	// const onFileUpload = (e, index) => {
	// 	const file = e.target.files[0];
	// 	if (file) {
	// 		setAssignments(prev => ({
	// 			...prev,
	// 			[index]: file
	// 		}));
	// 	}
	// };

	// const filteredData = tableData.filter(item => item.name?.trim().toUpperCase() === name?.trim().toUpperCase());

	// const updatedTableData = filteredData.map((item) => ({
	// 	...item,
	// 	asignments: (
	// 		<>
	// 			<img src={Upload} alt="Logo" className={styles.logo} width={"30px"}
	// 				onClick={() => handleUploadClick(item.id)} />
	// 			<input
	// 				type="file"
	// 				id={`fileInput-${item.id}`}
	// 				style={{ display: 'none' }}
	// 				onChange={(e) => onFileUpload(e, item.id)}
	// 			/>
	// 			{assignments[item.id] && <span>{assignments[item.id].name}</span>}
	// 		</>
	// 	)
	// }));

	return (
		<div>
			<div className={styles.header}>
				<div>
					<img src={Back} alt="Back" className={styles.backBtn} onClick={handelBack} width={"30px"} />
					{/* <Button onClick={handelBack} >Back</Button> */}
				</div>
				{isAdmin == 1 ? (
					<Button type="button" className={`${styles.addTopic}btn btn-primary`} data-toggle="modal" data-target="#addTopic" onClick={openAddTopic}>+ Add Topic</Button>
				) : null}
			</div>
			<div className={styles.courseName}>
				<img src={logo} alt="Logo" className={styles.logo} width={"50px"} />
				<div className={styles.name}>{name}</div>
			</div>

			<AddTopic />
			<div className={styles.describtionContainer}>
				<p>{description}</p>
			</div>
			<div className={styles.table}>
				{console.info(displayTopic, "topic")}
				<CourseTable
					tableHead={tableHead}
					tableData={displayTopic}
					setYoutubeSrc = {setYoutubeSrc}
					handleFileUpload={handleFileUpload}
					setEditData={setEditData}
					editData={editData}
				/>
				<Edit getTopics={getTopics} editData={editData} setEditData={setEditData} id={id}/>
			</div>
			<div className={styles.footer}>

			</div>
			{console.info(displayTopic.tech_id, 'displayTopic.tech_topic_id')}
			<AddParticularTopic isOpen={isAddTopicModalOpen} onClose={closeAddTopicModal}
				id={id} getTopics={getTopics}/>
			<div className="modal" id="exampleModalVideo" tabIndex="-1"
				aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">YouTube</h5>
							<button type="button" className="btn-close"
								data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							{console.info(youtubeSrc, 'yttttt')}
							<iframe
								width="100%"
								height="450"
								// src={youtubeSrc && youtubeSrc}
								// src={'https://www.youtube.com/embed/CKSdHsQyPYk?si=T6KU4ILrk5cE-xgM'}
								src={link}
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write;
								encrypted-media; gyroscope; picture-in-picture"
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

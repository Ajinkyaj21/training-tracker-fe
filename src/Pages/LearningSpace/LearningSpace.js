import React, { useEffect, useState } from 'react';
import Button from '../../Components/Button/CustomButton';
import DisplayCard from '../../Components/DishplayCard/DisplayCard';
import DisplayBox from '../../Components/DisplayBox/DisplayBox';
import AddTopic from '../../Components/Modals/AddTopic';
import { getCourse } from '../../Services/Api';
import styles from './LearningSpace.module.css';

export default function LearningSpace() {
	const [isAddTopicModalOpen, setIsAddTopicModalOpen] = useState(false);
	const [getCourses, setGetCourses] = useState([]);
	const [activeTab, setActiveTab] = useState('course');
	const isAdmin = localStorage.getItem('adminToken');

	const openAddTopic = () => {
		setIsAddTopicModalOpen(true);
	};

	const closeAddTopicModal = () => {
		setIsAddTopicModalOpen(false);
	};

	const displayCourse = async () => {
		try {
			const res = await getCourse();
			setGetCourses(res.data.result);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		displayCourse();
	}, []);

	const formatDate = (dateString) => {
		return dateString.substring(0, 10);
	};
	const links = [
		{
			id: "1",
			description: "Test Driven development in ReactJS and NodeJS",
			author: "Ajinkya Jagadale",
			date: "02 Aug 2024",
			location: 'Flairminds Software Pvt Ltd',
			link: "https://stlearningspacesfm001.blob.core.windows.net/uploads/Session on Test Driven Development in React and Node JS-20240802_112510-Meeting Recording.mp4"
		},
		{
			id: "2",
			description: "Google Cloud",
			author: "Narayan Pisharoty",
			date: "02 July 2024",
			location: 'Flairminds Software Pvt Ltd',
			link: "https://stlearningspacesfm001.blob.core.windows.net/uploads/Session on Google Cloud-20240702_072208-Meeting Recording.mp4"
		},
		{
			id: "3",
			description: "Introduction to AI",
			author: "Shriman Tiwari",
			date: "12 June 2024",
			location: 'Flairminds Software Pvt Ltd',
			link: "https://stlearningspacesfm001.blob.core.windows.net/uploads/Introduction to AI-20240612_124352-Enregistrement de la réunion.mp4"
		}
	];
	return (
		<>
			<div className={styles.buttonGroup}>
				<button
					className={`${styles.tabButton} ${activeTab === 'course' ? styles.activeButton : ''}`}
					onClick={() => setActiveTab('course')}
				>
					<h6>Course</h6>
				</button>
				<button
					className={`${styles.tabButton} ${activeTab === 'session' ? styles.activeButton : ''}`}
					onClick={() => setActiveTab('session')}
				>
					<h6>Session</h6>
				</button>
			</div>

			{activeTab === 'course' && (
				<div>
					{isAdmin == 1 ? (
						<div className={styles.btnDiv}>
							<Button type="button" className="btn btn-primary" onClick={openAddTopic}>+ Add Course</Button>
						</div>
					) : null}
					<div>
						<h4 className={styles.allCourses}>All Courses</h4>
					</div>
					<div className={styles.mainContainer}>
						<div className={styles.container1}>
							{getCourses.map((item, index) => (
								<DisplayBox
									key={index}
									id={item.course_id}
									logo={item.image}
									name={item.course}
									description={item.description}
									lastUpdate={formatDate(item.created_at)}
								/>
							))}
						</div>
					</div>
					<AddTopic isOpen={isAddTopicModalOpen} onClose={closeAddTopicModal} displayCourse={displayCourse} />
				</div>
			)}

			{activeTab === 'session' && (
				<div>
					<div>
						<h4 className={styles.allCourses}>All Sessions</h4>
					</div>
					<div className={styles.displayCard}>
						<DisplayCard links={links}></DisplayCard>
					</div>
				</div>
			)}
		</>
	);
}

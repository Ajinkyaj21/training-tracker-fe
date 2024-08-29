import React, { useEffect, useState } from 'react';
import Button from '../../Components/Button/CustomButton';
import DisplayCard from '../../Components/DishplayCard/DisplayCard';
import DisplayBox from '../../Components/DisplayBox/DisplayBox';
import AddSession from '../../Components/Modals/AddSession/AddSession';
import AddTopic from '../../Components/Modals/AddTopic';
import { getCourse, getSessions } from '../../Services/Api';
import styles from './LearningSpace.module.css';

export default function LearningSpace() {
	const [isAddTopicModalOpen, setIsAddTopicModalOpen] = useState(false);
	const [getCourses, setGetCourses] = useState([]);
	const [loading, setLoading] = useState(true);
	const [activeTab, setActiveTab] = useState('course');
	const isAdmin = localStorage.getItem('adminToken');
	const [isAddSessionModalOpen, setIsAddSessionModalOpen ] = useState(false);
	const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);
	const [sessionData, setSessionData] = useState([]);
	useEffect(() => {
		displayCourse();
		console.info(selectedVideoIndex);
		setSelectedVideoIndex(null);
	}, []);

	const openAddTopic = () => {
		setIsAddTopicModalOpen(true);
	};

	const closeAddTopicModal = () => {
		setIsAddTopicModalOpen(false);
	};

	const displayCourse = async () => {
		try {
			setLoading(true);
			const res = await getCourse();
			setGetCourses(res.data.result);
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		displayCourse();
	}, []);

	const formatDate = (dateString) => {
		return dateString.substring(0, 10);
	};

	const openAddSession = () => {
		setIsAddSessionModalOpen(true);
	};
	const closeAddSession = () => {
		setIsAddSessionModalOpen(false);
	};
	const handleDescriptionClick = (index) => {
		setSelectedVideoIndex(index);
	};
	const getSessionLinks = async() => {
		const res = await getSessions();
		setSessionData(res?.data?.result);
	};
	useEffect(() => {
		setSelectedVideoIndex(null);
		getSessionLinks();
	}, [activeTab === 'session']);
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

					{loading ? (
						<div className="d-flex justify-content-center">
							<div className="spinner-border text-info" role="status">
								<span className="visually-hidden">Loading...</span>
							</div>
						</div>
					) : (
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
					)}

					<AddTopic isOpen={isAddTopicModalOpen} onClose={closeAddTopicModal} displayCourse={displayCourse} />
				</div>
			)}

			{activeTab === 'session' && (
				<div>
					{isAdmin == 1 && (
						<>
							<div className={styles.btnDiv}>
								<Button type="button" className="btn btn-primary" onClick={openAddSession}>+ Add Session</Button>
							</div>
							<AddSession isOpen={isAddSessionModalOpen} onClose={closeAddSession} />
						</>
					)}
					<div>
						<h4 className={styles.allCourses}>All Sessions</h4>
					</div>
					<div className={styles.displayCard}>
						<DisplayCard links={sessionData} onDescriptionClick={handleDescriptionClick} />
					</div>
				</div>
			)}
		</>
	);
}

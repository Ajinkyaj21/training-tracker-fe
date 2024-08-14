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
			description: "A JavaScript function is a block of JavaScript code, that can be executed when  for For example, a function can be called when an event occurs, like when the user clicks a button." ,
			link: "https://youtu.be/Zo-6_qx8uxg?si=4qMylLCF-NZJrpSu"
		},
		{
			id: "2",
			description: "We recommend reading this tutorial, in the sequence listed in the menuIf you have a large screen, the menu will always be present on the left.If you have a small screen, open the menu by clicking the top menu sign ☰.",
			link: "https://youtu.be/6IQUg7EWExs?si=ZtBJ25IwuE5IoN0I"
		}, {
			id: "3",
			description: "The negative infinity is a constant value represents the lowest available value. It means that no other number is lesser than this value. It can be generate using a self-made function or by an arithmetic operation. JavaScript shows the NEGATIVE_INFINITY value as -Infinity.",
			link: "https://youtu.be/Zo-6_qx8uxg?si=4qMylLCF-NZJrpSu"
		},
		{
			id: "4",
			description: "A JavaScript function is a block of JavaScript code, that can be executed when  for For example, a function can be called when an event occurs, like when the user clicks a button." ,
			link: "https://youtu.be/Zo-6_qx8uxg?si=4qMylLCF-NZJrpSu"
		},
		{
			id: "5",
			description: "We recommend reading this tutorial, in the sequence listed in the menuIf you have a large screen, the menu will always be present on the left.If you have a small screen, open the menu by clicking the top menu sign ☰.",
			link: "https://youtu.be/6IQUg7EWExs?si=ZtBJ25IwuE5IoN0I"
		}, {
			id: "6",
			description: "The negative infinity is a constant value represents the lowest available value. It means that no other number is lesser than this value. It can be generate using a self-made function or by an arithmetic operation. JavaScript shows the NEGATIVE_INFINITY value as -Infinity.",
			link: "https://youtu.be/Zo-6_qx8uxg?si=4qMylLCF-NZJrpSu"
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
					{isAdmin == 1 ? (
						<div className={styles.btnDiv}>
							<Button type="button" className="btn btn-primary" onClick={openAddTopic}>+ Add Session</Button>
						</div>
					) : null}
					<div>
						<h4 className={styles.allCourses}>All Sessions</h4>
					</div>
					<div>
						<DisplayCard links={links}></DisplayCard>
					</div>
				</div>
			)}
		</>
	);
}

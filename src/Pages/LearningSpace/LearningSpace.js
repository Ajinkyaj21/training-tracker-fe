import React, { useEffect, useState } from 'react';
import Button from '../../Components/Button/CustomButton';
import DisplayBox from '../../Components/DisplayBox/DisplayBox';
import AddTopic from '../../Components/Modals/AddTopic';
import {getCourse} from '../../Services/Api';
// import data from '../../utils/CourseData';
import styles from './LearningSpace.module.css';
export default function LearningSpace() {
	const [isAddTopicModalOpen, setIsAddTopicModalOpen] = useState(false);
	const [getCourses, setGetCourses] = useState();
	const isAdmin = localStorage.getItem('adminToken');
	{ console.info(isAdmin, "admin"); }
	const openAddTopic = () => {
		setIsAddTopicModalOpen(true);
	};

	const closeAddTopicModal = () => {
		setIsAddTopicModalOpen(false);
	};
	const displayCourse = async () => {
		try {
			const res = await getCourse();
			// console.info(res, "--22");
			setGetCourses(res.data.result);

		} catch (err) {
			console.info(err);
		}
	};
	useEffect(() => {
		displayCourse();

	}, []);
	const formatDate = (dateString) => {
		return dateString.substring(0, 10);
	};

	return (
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
					{getCourses?.map((item, index) => (<>
						{console.info(item, "<--42")}
						<DisplayBox key={index} id={item.course_id} logo={item.image}
							name={item.course} description={item.description}
							lastUpdate={formatDate(item.created_at)}/></>
					))}
					{/* {data.map((item, index) => (
						<DisplayBox key={index} logo={item.logo} name={item.name}
							description={item.description} lastUpdate={item.lastUpdate} />
					))} */}
				</div>
			</div>
			<AddTopic isOpen={isAddTopicModalOpen} onClose={closeAddTopicModal} displayCourse ={displayCourse}/>
		</div>
	);
}

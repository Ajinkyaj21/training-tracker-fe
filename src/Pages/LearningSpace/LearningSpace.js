import React, { useEffect, useState } from 'react';
import Button from '../../Components/Button/CustomButton';
import DisplayBox from '../../Components/DisplayBox/DisplayBox';
import AddTopic from '../../Components/Modals/AddTopic';
import {getCourse} from '../../Services/Api';
import data from '../../utils/CourseData';
import styles from './LearningSpace.module.css';
export default function LearningSpace() {
	const [isAddTopicModalOpen, setIsAddTopicModalOpen] = useState(false);
	const [getCourses, setGetCourses] = useState();
	{ console.info(getCourses); }
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

	return (
		<div>
			<div className={styles.btnDiv}>
				<Button type="button" className="btn btn-primary" onClick={openAddTopic}>+ Add Course</Button>
			</div>
			<div className={styles.mainContainer}>
				<div className={styles.container1}>
					{getCourses?.map((item, index) => (<>
						{console.info(item, "<--42")}
						<DisplayBox key={index} id={item.tech_id} logo={item.image}
							name={item.technology} description={item.description}/></>
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

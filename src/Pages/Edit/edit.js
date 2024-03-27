
import React from 'react';
// import { useParams } from 'react-router-dom';
import { Components } from '../../Components';
import styles from './edit.module.css';
const Edit = ({ data, setData }) => {
	// const { techonology } = useParams();
	// const [activityName, setActivityName] = useState('');
	// const [topic, setTopic] = useState('');
	// const [subTopic, setSubTopic] = useState('');
	// const [startDate, setStartDate] = useState('');
	// const [endDate, setEndDate] = useState('');
	// const [dueDate, setDueDate] = useState('');

	console.info('edit data', data);

	const handleSubmit = () => {
		// e.preventDefault();
		// const item = data?.find((item) => item?.techonology === techonology);

		// const updatedData = data?.map((item) =>
		// 	item ?.techonology === techonology
		// 		? {
		// 			...item,
		// 			activityName,
		// 			topic,
		// 			subTopic,
		// 			startDate,
		// 			endDate,
		// 			dueDate
		// 		}
		// 		: item
		// );
		// setData(updatedData);

	};

	return (
		<div className={styles.container}>
			<div className={styles.content} >

				<form onSubmit={handleSubmit}>
					<h1> Edit </h1>
					<div className={styles.input}><Components.Input type="text" value={data?.activity_name}
						onChange={(e) => setData({...data, 'activity_name': e.target.value})} placeholder={'Enter Activity Name'}/></div>
					<div className={styles.input} ><Components.Input type="text"
						value={data?.topic_name}
						onChange={(e) => setData({...data, 'topic_name': e.target.value})} placeholder={'Enter Topic'}/></div>
					<div className={styles.input}><Components.Input type="text"
						value={data?.sub_topic_name}
						onChange={(e) => setData({...data, 'sub_topic_name': e.target.value})}placeholder={'Enter Sub Toic'}/></div>
					<div className={styles.input}><Components.Input type="date"
						value={data?.start_date}
						onChange={(e) => setData({...data, "start_date": e.target.value})}placeholder={'Enter Start Date'}/></div>
					<div className={styles.input}><Components.Input type="date"
						value={data?.end_date}
						onChange={(e) => setData({...data, 'end_date': e.target.value})} placeholder={'Enter End Date'}/></div>
					<div className={styles.input}><Components.Input type="date"
						value={data?.due_date}
						onChange={(e) => setData({...data, 'due_date': e.target.value})} placeholder={'Edit Due Date'}/></div>
					<div className={styles.input}><Components.CustomButton width='100%'>Submit</Components.CustomButton></div>

				</form>

			</div>

		</div>

	);
};

export default Edit;

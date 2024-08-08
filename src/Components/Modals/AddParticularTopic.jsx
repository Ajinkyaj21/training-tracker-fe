import React, { useState } from 'react';
// import { Form } from 'react-router-dom';
import { postNewTopic } from '../../Services/Api';
import styles from './AddParticularTopic.module.css';

export default function AddParticularTopic({ isOpen, onClose, id, getTopics}) {
	const [formData, setFormData] = useState({
		moduleName: '',
		description: '',
		visitDate: '',
		topic: '',
		article: '',
		youtubeLink: '',
		practice: '',
		assignments: ''
	});
	const addNewTopic = async() => {
		console.info(id, "<---18 id");
		const postData = {
			ids: id,
			topic: formData?.topic,
			article: formData.article,
			youtube: formData.youtubeLink,
			practice: formData.practice,
			assignments: formData.assignments
		};
		try {
			const res = await postNewTopic(postData);
			console.info(res);
		} catch {
			console.info("error");
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addNewTopic();
		getTopics();
		setFormData({
			moduleName: '',
			description: '',
			visitDate: '',
			topic: '',
			article: '',
			youtubeLink: '',
			practice: '',
			assignments: ''
		});
		onClose();

		// console.log(formData);
	};

	return (
		<>
			{isOpen && (
				<div className={styles.modal}>
					<div className={styles.modalContent}>
						<div className={styles.modalHeader}>
							<h4 className={styles.modalTitle}>Add New Topic</h4>
							<button type="button" className={styles.closeButton} onClick={onClose}>&times;</button>
						</div>
						<div className={styles.modalBody}>
							<form onSubmit={(e) => handleSubmit(e)}>
								<div className={styles.formGroup}>
									<label>Topic<span>*</span></label>
									<input type="text" className={styles.formControl} name="topic" value={formData.topic} onChange={handleChange} required />
								</div>
								<div className={styles.formGroup}>
									<label>Article<span>*</span></label>
									<input type="text" className={styles.formControl} name="article" value={formData.article} onChange={handleChange} />
								</div>
								<div className={styles.formGroup}>
									<label>YouTube Link<span>*</span></label>
									<input type="url" className={styles.formControl} name="youtubeLink" value={formData.youtubeLink} onChange={handleChange} />
								</div>
								<div className={styles.formGroup}>
									<label>Practice<span>*</span></label>
									<input type="text" className={styles.formControl} name="practice" value={formData.practice} onChange={handleChange} />
								</div>
								<div className={styles.formGroup}>
									<label>Assignments<span>*</span></label>
									<input type="text" className={styles.formControl} name="assignments" value={formData.assignments} onChange={handleChange} />
								</div>
								<button type="submit" className={styles.submitButton}>Save</button>
							</form>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

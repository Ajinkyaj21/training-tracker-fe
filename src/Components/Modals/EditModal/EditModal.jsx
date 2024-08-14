import React, { useState, useEffect } from 'react';
import styles from './Edit.module.css';

const EditModal = ({ isOpen, onClose, editData, id, getTopics }) => {
	const [formData, setFormData] = useState(editData);

	useEffect(() => {
		setFormData(editData);
	}, [editData]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	};

	const editTopic = async() => {
		// console.info(id, "<---18 id");
		const editDatas = {
			ids: id,
			topic: editData.topic,
			article: editData.article,
			youtube: editData.youtubeLink,
			practice: editData.practice,
			assignments: editData.assignments
		};
		try {
			const res = await editTopic(editDatas);
			console.info(res);
		} catch (error) {
			console.error("Error updating topic:", error);
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		editTopic();
		getTopics();
	};
	if (!isOpen) return null;

	return (
		<div className={styles.modalOverlay}>
			<div className={styles.modalContent}>
				<h2>Edit Topic</h2>
				<form onSubmit={handleSubmit}>
					<div className={styles.formGroup}>
						<label>Topic Name</label>
						<input
							type="text"
							name="topic"
							value={formData.topic}
							onChange={handleChange}
						/>
					</div>
					<div className={styles.formGroup}>
						<label>Description</label>
						<textarea
							name="description"
							value={formData.description}
							onChange={handleChange}
						/>
					</div>
					<div className={styles.formGroup}>
						<label>Article URL</label>
						<input
							type="text"
							name="article"
							value={formData.article}
							onChange={handleChange}
						/>
					</div>
					<div className={styles.formGroup}>
						<label>YouTube URL</label>
						<input
							type="text"
							name="youtube"
							value={formData.youtube}
							onChange={handleChange}
						/>
					</div>
					<div className={styles.formGroup}>
						<label>Practice Document URL</label>
						<input
							type="text"
							name="practice"
							value={formData.practice}
							onChange={handleChange}
						/>
					</div>
					<div className={styles.formGroup}>
						<label>Assignment</label>
						<input
							type="text"
							name="assignments"
							value={formData.assignments}
							onChange={handleChange}
						/>
					</div>
					<div className={styles.modalActions}>
						<button type="submit" className={styles.saveBtn}>Save</button>
						<button type="button" className={styles.cancelBtn} onClick={onClose}>Cancel</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EditModal;

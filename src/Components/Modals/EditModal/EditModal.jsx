import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editTopic } from '../../../Services/Api';
import styles from './Edit.module.css';

export default function EditModal({ isOpen, onClose, editData, id, getTopics }) {
	const [formData, setFormData] = useState({
		moduleName: '',
		description: '',
		visitDate: '',
		topic: '',
		articleLink: '',
		articleFile: null,
		youtube: '',
		practiceLink: '',
		practiceFile: null
	});
	const [articleUploadType, setArticleUploadType] = useState('link');
	const [practiceUploadType, setPracticeUploadType] = useState('link');

	useEffect(() => {
		if (editData) {
			setFormData({
				moduleName: '',
				description: '',
				visitDate: '',
				topic: editData.topic || '',
				articleLink: editData.article || '',
				articleFile: null,
				youtube: editData.youtube || '',
				practiceLink: editData.practice || '',
				practiceFile: null
			});
			setArticleUploadType(editData.article ? 'link' : 'file');
			setPracticeUploadType(editData.practice ? 'link' : 'file');
		}
	}, [editData]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value
		}));
	};

	const handleFileChange = (e, field) => {
		setFormData((prevData) => ({
			...prevData,
			[field]: e.target.files[0]
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const formDataToSend = new FormData();
			formDataToSend.append('tech_topic_id', editData.topic_id);
			formDataToSend.append('tech_id', id);
			formDataToSend.append('topic', formData.topic);
			formDataToSend.append('youtube', formData.youtube);
			formDataToSend.append('assignments', formData.assignments);

			if (articleUploadType === 'link') {
				formDataToSend.append('article', formData.articleLink);
			} else if (formData.articleFile) {
				formDataToSend.append('article', formData.articleFile);
			}

			if (practiceUploadType === 'link') {
				formDataToSend.append('practice', formData.practiceLink);
			} else if (formData.practiceFile) {
				formDataToSend.append('practice', formData.practiceFile);
			}

			const res = await editTopic(formDataToSend);
			if (res.data.success) {
				console.info(res, "res for add new topic");
				toast.success("Topic edited successfully!");
				getTopics();
				onClose();
			}
		} catch (error) {
			toast.error("Failed to edit topic!");
		}
	};

	return (
		<>
			{isOpen && (
				<div className={styles.modal}>
					<div className={styles.modalContent}>
						<div className={styles.modalHeader}>
							<h4 className={styles.modalTitle}>{editData ? 'Edit Topic' : 'Add New Topic'}</h4>
							<button type="button" className={styles.closeButton} onClick={onClose}>&times;</button>
						</div>
						<div className={styles.modalBody}>
							<form onSubmit={handleSubmit}>
								<div className={styles.formGroup}>
									<label>Topic<span>*</span></label>
									<input type="text" className={styles.formControl} name="topic" value={formData.topic} onChange={handleChange} required />
								</div>
								<div className={styles.formGroup}>
									<label>Article Upload Type</label>
									<div className={styles.radioBtn}>
										<label>
											<input
												type="radio"
												name="articleUploadType"
												value="link"
												checked={articleUploadType === 'link'}
												onChange={() => setArticleUploadType('link')}
											/>
											Link
										</label>
										<label>
											<input
												type="radio"
												name="articleUploadType"
												value="file"
												checked={articleUploadType === 'file'}
												onChange={() => setArticleUploadType('file')}
											/>
											File
										</label>
									</div>
								</div>
								{articleUploadType === 'link' ? (
									<div className={styles.formGroup}>
										<label>Article Link</label>
										<input type="url" className={styles.formControl} name="articleLink" value={formData.articleLink} onChange={handleChange} />
									</div>
								) : (
									<div className={styles.formGroup}>
										<label>Article File</label>
										<input type="file" className={styles.formControl} name="articleFile" onChange={(e) => handleFileChange(e, 'articleFile')} />
									</div>
								)}
								<div className={styles.formGroup}>
									<label>YouTube Link</label>
									<input type="url" className={styles.formControl} name="youtube" value={formData.youtube} onChange={handleChange} />
								</div>
								<div className={styles.formGroup}>
									<label>Practice Upload Type</label>
									<div className={styles.radioBtn}>
										<label>
											<input
												type="radio"
												name="practiceUploadType"
												value="link"
												checked={practiceUploadType === 'link'}
												onChange={() => setPracticeUploadType('link')}
											/>
											Link
										</label>
										<label>
											<input
												type="radio"
												name="practiceUploadType"
												value="file"
												checked={practiceUploadType === 'file'}
												onChange={() => setPracticeUploadType('file')}
											/>
											File
										</label>
									</div>
								</div>
								{practiceUploadType === 'link' ? (
									<div className={styles.formGroup}>
										<label>Practice Link</label>
										<input type="url" className={styles.formControl} name="practiceLink" value={formData.practiceLink} onChange={handleChange} />
									</div>
								) : (
									<div className={styles.formGroup}>
										<label>Practice File</label>
										<input type="file" className={styles.formControl} name="practiceFile" onChange={(e) => handleFileChange(e, 'practiceFile')} />
									</div>
								)}
								<button type="submit" className={styles.submitButton}>Save</button>
							</form>
						</div>
					</div>
				</div>
			)}
			<ToastContainer />
		</>
	);
}

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postNewTopic } from '../../Services/Api';
import styles from './AddParticularTopic.module.css';

export default function AddParticularTopic({ isOpen, onClose, id, getTopics, editTopics }) {
	const [formData, setFormData] = useState({
		moduleName: '',
		description: '',
		visitDate: '',
		topic: '',
		articleLink: '',
		articleFile: '',
		youtube: '',
		practiceLink: '',
		practiceFile: '',
		assignments: ''
	});

	const [articleUploadType, setArticleUploadType] = useState('link');
	const [practiceUploadType, setPracticeUploadType] = useState('link');

	const convertFileToBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject(error);
		});
	};

	const addNewTopic = async () => {
		try {
			const articleData = articleUploadType === 'link'
				? formData.articleLink
				: await convertFileToBase64(formData.articleFile);

			const practiceData = practiceUploadType === 'link'
				? formData.practiceLink
				: await convertFileToBase64(formData.practiceFile);

			const postData = {
				ids: id,
				topic: formData.topic,
				article: articleData,
				youtube: formData.youtube,
				practice: practiceData,
				assignments: formData.assignments
			};

			const res = await postNewTopic(postData);
			console.info(res, "res for add new topic");
			toast.success("Topic added successfully!");
			getTopics();
		} catch (error) {
			toast.error("Failed to add topic!");
		}
	};

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

	const handleSubmit = (e) => {
		e.preventDefault();
		addNewTopic();
		setFormData({
			moduleName: '',
			description: '',
			visitDate: '',
			topic: '',
			articleLink: '',
			articleFile: '',
			youtube: '',
			practiceLink: '',
			practiceFile: '',
			assignments: ''
		});
		onClose();
	};

	return (
		<>
			{isOpen && (
				<div className={styles.modal}>
					<div className={styles.modalContent}>
						<div className={styles.modalHeader}>
							<h4 className={styles.modalTitle}>{editTopics ? 'Edit Topic' : 'Add New Topic'}</h4>
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

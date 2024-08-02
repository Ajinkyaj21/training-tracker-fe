import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postCourse } from '../../Services/Api';
import styles from './AddTopic.module.css';

export default function AddTopic({ isOpen, onClose, displayCourse }) {
	const [formData, setFormData] = useState({
		moduleName: '',
		description: '',
		logo: null
	});
	const [uploadedLogo, setUploadedLogo] = useState(null);

	const [renderLogo, setRenderLogo] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value
		}));
	};

	// const handleFileChange = (e) => {
	// 	const file = e.target.files[0];
	// 	setFormData((prevData) => ({
	// 		...prevData,
	// 		logo: file
	// 	}));
	// };
	const uploadLogo = (e) => {
		setUploadedLogo(e.target.files[0]);
		const uploadedImage = e.target.files[0];
		if (uploadedImage) {
			const reader = new FileReader();
			reader.onload = () => {
				setRenderLogo(reader.result);
			};
			reader.readAsDataURL(uploadedImage);
		}
	};
	console.info(uploadedLogo);
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.info("Form submitted");

		const postData = {
			technology: formData.moduleName,
			description: formData.description,
			image: renderLogo

		};
		console.info("Post Data:", postData);

		try {
			const res = await postCourse(postData);
			console.info("Response from postCourse API:", res);
			toast.success("Course added successfully!");
		} catch (err) {
			console.error("Error while posting course data:", err);
			toast.error("Error adding course.");
		}
		displayCourse();
		setFormData({
			moduleName: '',
			description: '',
			logo: null
		});
		onClose();
	};

	return (
		<>
			{isOpen && (
				<div className={styles.modal}>
					<div className={styles.modalContent}>
						<div className={styles.modalHeader}>
							<h5 className={styles.modalTitle}>Add New Course</h5>
							<button type="button" className={styles.closeButton} onClick={onClose}>&times;</button>
						</div>
						<div className={styles.modalBody}>
							<form onSubmit={handleSubmit}>
								<div className={styles.formGroup}>
									<label>Course Name<span className={styles.stare}>*</span></label>
									<input type="text" className={styles.formControl} name="moduleName" value={formData.moduleName} onChange={handleChange} required />
								</div>
								<div className={styles.formGroup}>
									<label>Logo</label>
									<input
										type="file"
										onChange={uploadLogo}
										accept="image/*"
										className={styles.formControl}
									/>
								</div>
								<div className={styles.formGroup}>
									<label>Description</label>
									<textarea className={styles.formControl} name="description" value={formData.description} onChange={handleChange} required />
								</div>
								<button type="submit" className={styles.submitButton}>Save changes</button>
							</form>
						</div>
					</div>
				</div>
			)}
			<ToastContainer />

		</>
	);
}

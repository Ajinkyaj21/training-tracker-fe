import React from 'react';
import styles from './Edit.module.css';

export default function Edit({getTopics, editData, setEditData, id}) {

	// const handleEditSubmit = async (event) => {
	// 	event.preventDefault();
	// 	try {
	// 		// await updateTopic(editData); // one more api
	// 		getTopics();
	// 	} catch (error) {
	// 		console.error("Error updating topic:", error);
	// 	}
	// };
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

	return (
		<div className="modal fade" id="exampleModalEdit" tabIndex="-1" aria-labelledby="exampleModalLabelEdit" aria-hidden="true">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLabelEdit">Edit Topic</h5>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
						{/* {console.info(editData, 'editdata')} */}
						{editData && (
							<form onSubmit={(e) => handleSubmit(e)}>
								<div className="mb-3">
									<label htmlFor="topicName" className={`form-label ${styles.formGroup}`}>Topic Name</label>
									<input
										type="text"
										className="form-control"
										id="topicName"
										value={editData.topic}
										onChange={(e) => setEditData({ ...editData, topic: e.target.value })}
										required
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="articleLink" className={`form-label ${styles.formGroup}`}>Article Link</label>
									<input
										type="text"
										className="form-control"
										id="articleLink"
										value={editData.Article}
										onChange={(e) => setEditData({ ...editData, Article: e.target.value })}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="youtubeLink" className={`form-label ${styles.formGroup}`}>YouTube Link</label>
									<input
										type="text"
										className="form-control"
										id="youtubeLink"
										value={editData.Youtube}
										onChange={(e) => setEditData({ ...editData, Youtube: e.target.value })}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="practiceLink" className={`form-label ${styles.formGroup}`}>Practice Link</label>
									<input
										type="text"
										className="form-control"
										id="practiceLink"
										value={editData.Practice}
										onChange={(e) => setEditData({ ...editData, Practice: e.target.value })}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="assignments" className={`form-label ${styles.formGroup}`}>Assignments</label>
									<input
										type="text"
										className="form-control"
										id="assignments"
										value={editData.Assignments}
										onChange={(e) => setEditData({ ...editData, Assignments: e.target.value })}
									/>
								</div>
								<button type="submit" className="btn btn-primary">Save changes</button>
							</form>
						)}
						<div className={styles.sampe}></div>
					</div>
				</div>
			</div>
		</div>

	);
}

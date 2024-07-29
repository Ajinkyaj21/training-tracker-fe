import React, { useState } from 'react';
import styles from './AddParticularTopic.module.css';

export default function AddParticularTopic({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    moduleName: '',
    description: '',
    visitDate: '',
    topic: '',
    article: '',
    youtubeLink: '',
    practice: '',
    assignments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
    onClose(); // Close the modal after submitting
  };

  return (
    <>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>Add New Course</h3>
              <button type="button" className={styles.closeButton} onClick={onClose}>&times;</button>
            </div>
            {/* <hr className={styles.horizontalLine} /> */}
            <div className={styles.modalBody}>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label>Topic:</label>
                  <input
                    type="text"
                    className={styles.formControl}
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Article</label>
                  <input
                    type="text"
                    className={styles.formControl}
                    name="article"
                    value={formData.article}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>YouTube Link</label>
                  <input
                    type="url"
                    className={styles.formControl}
                    name="youtubeLink"
                    value={formData.youtubeLink}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Practice</label>
                  <input
                    type="text"
                    className={styles.formControl}
                    name="practice"
                    value={formData.practice}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Assignments</label>
                  <input
                    type="text"
                    className={styles.formControl}
                    name="assignments"
                    value={formData.assignments}
                    onChange={handleChange}
                  />
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

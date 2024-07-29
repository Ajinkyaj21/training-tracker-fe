import React, { useState } from 'react';
import styles from './AddTopic.module.css';

export default function AddTopic({ isOpen, onClose, addNewCourse, data }) {
  const [formData, setFormData] = useState({
    moduleName: '',
    description: '',
    visitDate: '',
    topic: '',
    article: '',
    youtubeLink: '',
    practice: '',
    assignments: '',
    logo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      logo: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = (data.length + 1).toString();

    const newCourse = {
      id,
      name: formData.moduleName,
      logo: URL.createObjectURL(formData.logo),
      description: formData.description,
      lastUpdate: new Date().toLocaleDateString(),
    };
    addNewCourse(newCourse);
    setFormData({
      moduleName: '',
      description: '',
      visitDate: '',
      topic: '',
      article: '',
      youtubeLink: '',
      practice: '',
      assignments: '',
      logo: null,
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
            <hr className={styles.horizontalLine}/>
            <div className={styles.modalBody}>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label>Module Name</label>
                  <input type="text" className={styles.formControl} name="moduleName" value={formData.moduleName} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                  <label>Logo</label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*"
                    className={styles.formControl}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Description</label>
                  <textarea className={styles.formControl} name="description" value={formData.description} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                  <label>Visit Date</label>   
                  <input type="date" className={styles.formControl} name="visitDate" value={formData.visitDate} onChange={handleChange} />                         
                </div>
                <div className={styles.formGroup}>
                  <label>Topic</label>
                  <input type="text" className={styles.formControl} name="topic" value={formData.topic} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                  <label>Article</label>
                  <input type="text" className={styles.formControl} name="article" value={formData.article} onChange={handleChange} />
                </div>
                <div className={styles.formGroup}>
                  <label>YouTube Link</label>
                  <input type="url" className={styles.formControl} name="youtubeLink" value={formData.youtubeLink} onChange={handleChange} />
                </div>
                <div className={styles.formGroup}>
                  <label>Practice</label>
                  <input type="text" className={styles.formControl} name="practice" value={formData.practice} onChange={handleChange} />
                </div>
                <div className={styles.formGroup}>
                  <label>Assignments</label>
                  <input type="text" className={styles.formControl} name="assignments" value={formData.assignments} onChange={handleChange} />
                </div>
                <button type="submit" className={styles.submitButton}>Save changes</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

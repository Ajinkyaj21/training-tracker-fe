import React, { useState } from 'react';
import data from '../../utils/CourseData';
import Button from '../../Components/Button/CustomButton';
import DisplayBox from '../../Components/DisplayBox/DisplayBox';
import styles from './LearningSpace.module.css';
import AddTopic from '../../Components/Modals/AddTopic';
export default function LearningSpace() {
    const [isAddTopicModalOpen, setIsAddTopicModalOpen] = useState(false);

    const openAddTopic = () => {
        setIsAddTopicModalOpen(true);
    };

    const closeAddTopicModal = () => {
        setIsAddTopicModalOpen(false);
    };

    return (
        <div>
            <div className={styles.btnDiv}>
                <Button type="button" className="btn btn-primary" onClick={openAddTopic}>+ Add Course</Button>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.container1}>
                    {data.map((item, index) => (
                        <DisplayBox key={index} logo={item.logo} name={item.name} description={item.description} lastUpdate={item.lastUpdate} />
                    ))}
                </div>
            </div>
            <AddTopic isOpen={isAddTopicModalOpen} onClose={closeAddTopicModal} />
        </div>
    );
}

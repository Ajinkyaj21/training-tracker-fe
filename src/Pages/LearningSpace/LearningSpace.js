import React, { useState } from 'react';
import CssLogo from '../../Assets/CssLogo.svg.png';
import JsIcon from '../../Assets/JsIcon.png';
import MySQL from '../../Assets/MySQL.svg.png';
import NodeLogo from '../../Assets/NodeLogo.svg.png';
import ReactIcon from '../../Assets/React-icon.svg.png';
import Button from '../../Components/Button/CustomButton';
import DisplayBox from '../../Components/DisplayBox/DisplayBox';
import styles from './LearningSpace.module.css';
import AddTopic from '../../Components/Modals/AddTopic';

export default function LearningSpace() {
    const initialData = [
        {
            id: '1',
            name: 'MySQL',
            logo: MySQL,
            description: "This is a description for the display box.",
            lastUpdate: "22-07-2011"
        },
        {
            id: '2',
            name: 'JS',
            logo: JsIcon,
            description: "This is a description for the display box.",
            lastUpdate: "22-07-2011"
        },
        {
            id: '3',
            name: 'REACT',
            logo: ReactIcon,
            description: "This is a description for the display box.",
            lastUpdate: "22-07-2011"
        },
        {
            id: '4',
            name: 'CSS',
            logo: CssLogo,
            description: "This is a description for the display box.",
            lastUpdate: "22-07-2011"
        },
        {
            id: '5',
            name: 'NODE',
            logo: NodeLogo,
            description: "This is a description for the display box.",
            lastUpdate: "22-07-2011"
        }
    ];

    const [data, setData] = useState(initialData);
    const [isAddTopicModalOpen, setIsAddTopicModalOpen] = useState(false);

    const openAddTopic = () => {
        setIsAddTopicModalOpen(true);
    };

    const closeAddTopicModal = () => {
        setIsAddTopicModalOpen(false);
    };

    const addNewCourse = (newCourse) => {		
        setData((prevData) => [...prevData, newCourse]);
		initialData.push(newCourse);
		console.log("The initial Data is ---> ",initialData);
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
            <AddTopic isOpen={isAddTopicModalOpen} onClose={closeAddTopicModal} addNewCourse={addNewCourse} data={data} />
        </div>
    );
}

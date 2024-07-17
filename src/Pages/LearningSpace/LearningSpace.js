import React from 'react';
// import { useNavigate } from "react-router-dom";
import CssLogo from '../../Assets/CssLogo.svg.png';
import JsIcon from '../../Assets/JsIcon.png';
import MySQL from '../../Assets/MySQL.svg.png';
import NodeLogo from '../../Assets/NodeLogo.svg.png';
import ReactIcon from '../../Assets/React-icon.svg.png';
import Button from '../../Components/Button/CustomButton';
import DisplayBox from '../../Components/DisplayBox/DisplayBox';
import styles from './LearningSpace.module.css';
export default function LearningSpace() {
	// const navigate = useNavigate();
	// const handelCourse = () => {
	// 	navigate(`/course`);
	// };
	const data = [
		{id: '1',
			name: 'MySQL',
			logo: MySQL,
			description: "This is a description for the display box.",
			lastUpdate: "22-07-2011"
		},
		{id: '2',
			name: 'JS',
			logo: JsIcon,
			description: "This is a description for the display box.",
			lastUpdate: "22-07-2011"
		},
		{id: '3',
			name: 'REACT',
			logo: ReactIcon,
			description: "This is a description for the display box.",
			lastUpdate: "22-07-2011"
		},
		{id: '4',
			name: 'CSS',
			logo: CssLogo,
			description: "This is a description for the display box.",
			lastUpdate: "22-07-2011"
		},
		{ id: '5',
			name: 'NODE',
			logo: NodeLogo,
			description: "This is a description for the display box.",
			lastUpdate: "22-07-2011"
		}
	];
	return (
		<div>
			<div className={styles.btnDiv}>
				<Button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">+ Add Course</Button>
			</div>
			<div className={styles.mainContainer}>
				<div className={styles.container1}>
					{data.map((item, index) => (
						<DisplayBox key={index} logo={item.logo} name={item.name} description={item.description}
							lastUpdate={item.lastUpdate} />
					))}
				</div>
			</div>
			<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
				...
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
							<button type="button" className="btn btn-primary">Save changes</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

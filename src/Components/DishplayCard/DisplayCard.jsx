import React from 'react';
import ReactPlayer from 'react-player';
import styles from './DisplayCard.module.css';

export default function DisplayCard({ links }) {
	return (
		<div className={styles.cardContainer}>
			{links.map((link, index) => (
				<div key={index} className={styles.card}>
					<ReactPlayer
						url={link.link}
						width='400'
						height='300'
						controls={true}
					/>
					<div className={styles.cardDescription}>
						{link.description.length > 100
							? `${link.description.substring(0, 100)}...`
							: link.description}
						<div className={styles.otherDetails}>
							<p className={styles.description}>By&nbsp;{link.author}</p>
							<p className={styles.description}>On&nbsp;{link.date}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

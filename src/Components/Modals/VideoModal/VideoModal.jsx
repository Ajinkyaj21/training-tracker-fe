import React, { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import ReactPlayer from 'react-player';
import styles from './VideoModal.module.css';

const VideoModal = ({ isOpen, onClose, videoSrc, getTopics, id }) => {
	// if (!isOpen) return null;
	const link = videoSrc ? videoSrc.replace("watch?v=", "embed/") : "https://www.youtube.com/embed/llerWRF4Vf8";
	useEffect(() => {
		getTopics();
	}, []);

	return (
		<>
			<Modal show={isOpen} onHide={onClose}>
				<div className={styles.modalOverlay}>
					<div className={styles.modalContent}>
						<div className={styles.modalHeader}>
							<h5>YouTube Video</h5>
							<button type="button" className={styles.closeButton} onClick={onClose}>×</button>
						</div>
						{console.info(videoSrc && videoSrc, "videosrcModal")}
						<div className={styles.modalBody}>
							<ReactPlayer url={videoSrc } controls= {true} playing={true} />
						</div>
						<div className={styles.modalFooter}>
							<button type="button" className={styles.closeButton} onClick={onClose}>Close</button>
						</div>
					</div>
				</div>
			</Modal>
		</>

	);
};

export default VideoModal;

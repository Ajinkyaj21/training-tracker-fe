import React from 'react';

const VideoModal = ({ isOpen, onClose, videoSrc }) => {
	if (!isOpen) return null;

	return (
		<div className="modal show" style={{ display: 'block' }}>
			<div className="modal-dialog modal-lg">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">YouTube Video</h5>
						<button type="button" className="btn-close" onClick={onClose}></button>
					</div>
					<div className="modal-body">
						<iframe
							width="100%"
							height="450"
							src={videoSrc}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" onClick={onClose}>
                        Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoModal;

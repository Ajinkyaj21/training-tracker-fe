import React from 'react';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import Trainees from '../../Pages/Trainees/Trainees';

export default function HiddenSideBar() {

	return (
		<div className='container'>
			<div className='row'>
				<div className='col'>
					<button className="btn text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"> = </button>
					<div className="offcanvas-header">
						<div className="offcanvas-title" id="offcanvasScrollingLabel"></div>
						<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>
					<div className="offcanvas-body">
						<Trainees/>
						<Dashboard></Dashboard>
					</div>
				</div>
			</div>
		</div>
	);
}

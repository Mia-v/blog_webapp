import React from 'react';
import './InpageNav.scss';
import contentIsComing from './typing_machine.jpg';


const InpageNav = () => {
	return (
		<div className="layoutItems inpageNav">
			<h3>Some content is coming</h3>
				<img src={contentIsComing} alt="" />
		</div>
	)
}

export default InpageNav;
import React from 'react';
import './Additions.scss';
import muiderslotImg from './muiderslot.jpg';

const Additions = () => {
	return (
		<div className="layoutItems additions">
			<h3>Places to visit</h3>
			<figure>
					<img className="smallPics" src={muiderslotImg} alt="Muiderslot" />
					<figcaption>Muiderslot, Netherlands</figcaption>
			</figure>
		</div>
			)
		}
		
export default Additions;
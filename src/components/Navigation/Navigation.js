import React, { useState } from "react";
import "./Navigation.scss";


const Navigation = () => {

	const [isChecked, setIsChecked] = useState(false);

	const handleToggle = () => setIsChecked(!isChecked);

	return (
		<div className="container-menu">
			<input checked={isChecked} onChange={handleToggle} type="checkbox" id="ckb" className="checkbox-menu" />
			<label for="ckb" className="menu-btn-cross">
				<span className="one"></span>
				<span className="two"></span>
				<span className="three"></span>
			</label>
			<ul className="menu-list" >
				<li><a href="#" className="nav-items">About</a></li>
				<li><a href="#" className="nav-items">About</a></li>
				<li><a href="#" className="nav-items">About</a></li>
			</ul>
		</div>
	)
}

export default Navigation;
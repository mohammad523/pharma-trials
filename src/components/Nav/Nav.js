/** @format */

import React, { useState } from "react";
import "animate.css";
import styles from "./Nav.css";
import e from "cors";

const Nav = () => {
	const [nav, setNav] = useState(false);

	console.log(nav);

	let disp = nav ? { display: "inline" } : { display: "none" };

	// // main link
	// const mainLink = () => {
	// 	setNav(false);
	// };

	return (
		<ul className='nav-ul-container'>
			<div className='large-logo-container'>
				<h1 className='logo'>RTW </h1>
				<ul className='small-logo-ul'>
					<li className='small-logo'>Research</li>
					<li className='small-logo'>Trials</li>
					<li className='small-logo'>Worldwide, LLC</li>
				</ul>
			</div>
			<div onClick={() => setNav(!nav)}>
				<ul className='burger'>
					<div className='burger-line'></div>
					<div className='burger-line'></div>
					<div className='burger-line'></div>
				</ul>
			</div>
			<div className='expandedNav' style={disp}>
				<ul onClick={() => setNav(!nav)} className='burger burger-nav'>
					<div className='burger-line'></div>
					<div className='burger-line'></div>
					<div className='burger-line'></div>
				</ul>
				<ul onClick={() => setNav(!nav)} className='links'>
					<li className='main-link'></li>
					<a href='#2' className='services-link'>
						Services 🩺
					</a>
					<a href='#3' className='contact-link'>
						Contact Us 📞
					</a>
				</ul>
			</div>
		</ul>
	);
};

export default Nav;

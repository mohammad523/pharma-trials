/** @format */

import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "./Services.css";

const Services = () => {
	const { ref, inView, threshold } = useInView({
		threshold: [0.1],
	});

	// console.log(inView, "inView");

	return (
		<div id='2' ref={ref} inview='inView' className='services-page-container'>
			<div className='services-header'>
				<h1>SERVICES</h1>
				<div className='underline'></div>
			</div>
			<ul className='services-list'>
				{inView ? (
					<>
						<li className='liOne'>Clinical Trials</li>
						<li className='liTwo'>Prevantative Health Screening</li>
						<li className='liThree'>In office Treatments & Therapies</li>
						<li className='liFour'>Asthma treatment</li>
						<li className='liFive'>Minor wound care</li>
						<li className='liSix'>Free Community Clinic</li>
						<br />
						<li className='last-service-li'>
							We have an extensive amount of experience in taking care of
							patient with chronic illnesses like hypertension, high
							cholesterol, diabetes, asthma/COPD, thyroid problems and many
							more.
						</li>
					</>
				) : (
					""
				)}
			</ul>
		</div>
	);
};

export default Services;

/** @format */

import stethoscope from "./stethoscope.svg";
import heartbeat from "./heartbeat.svg";
import cardiograph from "./cardiograph.svg";

import React from "react";
import styles from "./Page2.css";
import { useInView } from "react-intersection-observer";
import "animate.css";
const cors = require("cors");

const Page2 = () => {
	const { ref, inView } = useInView({
		threshold: 0.25,
	});

	let play = inView ? (
		<div>
			<img className='stethoscope' src={stethoscope} />
			<img className='cardiograph' src={heartbeat}>
				{/* <div className='mover'></div> */}
			</img>
		</div>
	) : // <video className='video' id='background-video' autoPlay loop>
	// 	<source src='https://i.imgur.com/lXHLVQ4.mp4' type='video/mp4' />
	// </video>
	// <video
	// 	src='https://imgur.com/lXHLVQ4'
	// 	autoPlay={true}
	// 	className='video'
	// 	style={{ animation: "fadeIn", animationDuration: "3s" }}
	// ></video>
	// <a href="https://imgur.com/lXHLVQ4"></a>
	null;

	return (
		<div ref={ref} inview='inView' className='page-2-container'>
			{play}
			<p className='page-2-text'>
				Every day, medical professionals, pharmacists, mathematicians, chemists,
				biologists, and other experts lend their services to the discovery of
				new and advanced treatment for medical disorders, chronic diseases,
				life- threatening illnesses, and infectious diseases.
			</p>
		</div>
	);
};

export default Page2;

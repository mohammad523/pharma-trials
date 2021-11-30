/** @format */

import React from "react";
import styles from "./Main.css";
import "animate.css";
import Nav from "../Nav/Nav";
import { useInView } from "react-intersection-observer";

const Main = () => {
	return (
		<div id='1' className='main'>
			<Nav />
			<h1 className='tagline'>we care about your health</h1>
			<p className='paragraph-1'>
				We believe that people who participate in clinical trials are true
				heroes because researching today's medicines will bring tomorrow's cures
				and help to improve and save countless lives.
			</p>
		</div>
	);
};

export default Main;

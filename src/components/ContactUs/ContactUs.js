/** @format */

import React, { useState, useRef } from "react";
import styles from "./ContactUs.css";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import emailjs from "emailjs-com";

const ContactUs = () => {
	const [result, setResult] = useState(null);
	const { ref, inView, threshold } = useInView({
		threshold: [0.4],
	});

	const [formData, setFormData] = useState({
		user_name: "",
		user_email: "",
		user_phone: "",
		message: "",
	});

	const form = useRef();

	// axios request
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_5w939ph",
				"template_fvfc2sa",
				form.current,
				"user_18pEdqVic0ELZzqLLuUBQ"
			)
			.then(
				function (response) {
					console.log("SUCCESS!", response.status, response.text);
				},
				function (error) {
					console.log("FAILED...", error);
				}
			);
		setFormData({
			user_name: "",
			user_email: "",
			user_phone: "",
			message: "",
		});
	};

	console.log("form", form.current);

	const { user_name, user_email, user_phone, message } = formData;

	// spread operator adds only the elements of the array, not the entire array with brackets

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
	};

	let toggle = inView ? "contact-us-page inverse" : "contact-us-page";

	return (
		<div id='3' className={toggle} ref={ref} inview='inView'>
			<div className='home-link'>
				<a href='#1'>
					<ul>
						<li>HOME</li>
					</ul>
				</a>
			</div>
			<div className='contact-us-header'>
				<h1 className='contact-us-header-h1'>CONTACT US</h1>
				<div className='underline'></div>
			</div>
			<ul className='contact-us-ul'>
				<div className='icons'>
					<a href='https://www.facebook.com/Trialworld/'>
						<span className='fb'>f</span>
					</a>
				</div>
				<br />
				<p className='number'> +1(281)-446-4273 or +1(281)-803-9730</p>
				<br />
				<p className='address-line-1'>Research Trials Worldwide LLC</p>
				<p className='address-line-2'>9802 FM 1960 Bypass Rd W., Ste 175</p>
				<p className='address-line-3'>Humble, TX 77338</p>
				<br />
				<p className='fax'>Fax: +1(206)-339-1888</p>
			</ul>
			<div className='contact-us-form-div'>
				<form ref={form} onSubmit={sendEmail} className='contact-form'>
					<input
						className='name-field '
						type='text'
						placeholder=' Name'
						name='user_name'
						value={user_name}
						onChange={(e) => onChange(e)}
					/>
					<br />
					<input
						className='email-field '
						type='text'
						placeholder=' Email'
						name='user_email'
						value={user_email}
						onChange={(e) => onChange(e)}
					/>
					<br />
					<input
						className='phone-field'
						type='text'
						placeholder=' Phone'
						name='user_phone'
						value={user_phone}
						onChange={(e) => onChange(e)}
					/>
					<br />
					<textarea
						className='message-field'
						type='text'
						placeholder=' Message'
						name='message'
						value={message}
						onChange={(e) => onChange(e)}
						rows='4'
					></textarea>
					<input type='submit' value='Send' />
				</form>
			</div>
		</div>
	);
};

export default ContactUs;

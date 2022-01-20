import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as emailjs from 'emailjs-com';

import pic01 from '../images/pic01.jpg';

class Main extends Component {
	state = {
		name: '',
		email: '',
		message: '',
		redirect: false
	};

	onChange = ( event ) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	clearForm = () => {
		this.setState({
			name: '',
			email: '',
			message: ''
		});
	};

	handleSubmit = ( event ) => {
		event.preventDefault();

		// preserve initial state
		this.baseState = this.state;

		const formParams = {
			fromName: this.state.name,
			fromEmail: this.state.email,
			toEmail: 'andrew.demers91@gmail.com',
			message: this.state.message
		};

		emailjs.send('mailgun', 'my_portfolio_template', formParams, 'user_uABJMRa0kF9MP0dQp0ik9')
			.then(res => {
				console.log('Success');
			})
			.catch(err => console.error('Failed to send feedback. Error: ', err));

		// reset state
		this.clearForm();
	};

	render() {
		const { name, email, message } = this.state;

		let close = <div className="close" onClick={() => {
			this.props.onCloseArticle();
		}}></div>;

		return (
			<div ref={this.props.setWrapperRef} id="main"
			     style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

				<article id="intro"
				         className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
				         style={{ display: 'none' }}>
					<h2 className="major">Intro</h2>
					<span className="image main"><img src={pic01} alt="" /></span>
					<p>I am a project manager with a software and mechanical engineering background. I have a B.S. in Mechanical
						Engineering and in Computer Science, and I am currently working on my MBA in Data Analytics.
						I have worked in the technology, defense, financial, and fabrication industries in a variety of
						roles.
						I have experience in C, C++, Javascript, React, and Python, and I have a strong interest in product management.</p>
					{close}
				</article>

				<article id="work"
				         className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
				         style={{ display: 'none' }}>
					<h2 className="major">Where I've Worked</h2>

					<h4>Project Manager II, Strategic Projects @ FlashParking</h4>
					Jun. 2021  - Present
					<ul>
						<li> Current focus on new construction and special software integration projects  </li>
						<li> Work with development, engineering, and software to complete unique, one-off projects	</li>
						<li> Create process improvement tools, including a dynamic implementation timeline that can be
							adapted to numerous types of project and deliverable requirements</li>
					</ul>

					<h4>Project Manager I @ FlashParking</h4>
					Sept. 2020 - Jun. 2021
					<ul>
						<li> Complete projects on time and on budget while managing multiple projects simultaneously </li>
						<li> Hosted project kickoff calls, ordered all required equipment, coordinated shipping, and scheduled
							installation of $2.2 million+ in FlashPARCS equipment
						</li>
					</ul>

					<h4>Software Engineer @ Ultra Electronics</h4>
					Nov 2019 - July 2021
					<ul>
						<li>
							Responsible for the design, modification, implementation, and integration of software programs
							to meet the requirements and constraints of the customer scope of work
						</li>
						<li>
							Install, integrate, and test virtualized hardware and software components within the company’s
							products
						</li>
					</ul>

					<h4>Web Developer @ OroSolutions, LLC</h4>
					Mar 2019 - Nov 2019
					<ul>
						<li>
							Continuously improve and develop web applications to assist the accounting team in preparation
							and delivery of web-based financial statements
						</li>
						<li>
							Enhance the company’s automated reporting platform by improving report generation controls
							using a variety of APIs
						</li>
					</ul>
					<h4>Lead Engineer @ Midas Green Tech</h4>
					Jan 2018 - Dec 2018
					<ul>
						<li>Led a diverse team in the design of immersion cooling and supporting systems</li>
						<li>Responsible for the final specifications, tolerance analysis, and design of all company
							products
						</li>
						<li>Created Python scripts to read and parse data to calculate ROI for different
							cryptocurrencies
						</li>
					</ul>
					<h4>Lead Engineer @ Midas Green Tech</h4>
					Jan 2018 - Dec 2018
					<ul>
						<li>Led a diverse team in the design of immersion cooling and supporting systems</li>
						<li>Responsible for the final specifications, tolerance analysis, and design of all company
							products
						</li>
						<li>Created Python scripts to read and parse data to calculate ROI for different
							cryptocurrencies
						</li>
					</ul>
					{close}
				</article>

				<article id="about"
				         className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
				         style={{ display: 'none' }}>
					<h2 className="major">Projects</h2>
					<h4>Schedule-It</h4>
					<ul className="icons">
						<li>Scheduling web app supporting user authentication made using Django, React, and SQLite</li>
						<li><a href="https://github.com/demersaj/schedule-it" target="_blank"
						       className="icon fa-github"><span
							className="label">Github</span></a></li>
					</ul>

					<h4>CS493 Final Project</h4>
					<ul className="icons">
						<li>RESTful API using user authentication made using Node.js, Docker, Google Cloud, and Auth 0</li>
						<li><a href="https://github.com/demersaj/cs493-final-project" target="_blank"
						       className="icon fa-github"><span
							className="label">Github</span></a></li>
					</ul>

					<h4>Build-a-Burger</h4>
					<ul className="icons">
						<li>Dynamic burger building app created using React/Redux, Axios, Webpack, and Firebase</li>
						<li><a href="https://build-a-burger-399bc.firebaseapp.com/" target="_blank"
						       className="icon fa-external-link"><span
							className="label">Live Version</span></a></li>
						<li><a href="https://github.com/demersaj/build-a-burger" target="_blank"
						       className="icon fa-github"><span
							className="label">Github</span></a></li>
					</ul>

					<h4>Cyrptocurrency Price Tracker</h4>
					<ul className="icons">
						<li>Live alerts of cryptocurrency prices using Python for desktop notifications</li>
						<br />
						<li><a href="https://github.com/demersaj/Crypto-alert" target="_blank"
						       className="icon fa-github"><span
							className="label">Github</span></a></li>
					</ul>
					{close}
				</article>

				<article id="contact"
				         className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
				         style={{ display: 'none' }}>
					<h2 className="major">Contact</h2>
					<form onSubmit={this.handleSubmit}>
						<div className="field half first">
							<label htmlFor="name">Name</label>
							<input
								type="text"
								name="name"
								id="name"
								value={name}
								onChange={this.onChange} />
						</div>
						<div className="field half">
							<label htmlFor="email">Email</label>
							<input
								type="text"
								name="email"
								id="email"
								value={email}
								onChange={this.onChange} />
						</div>
						<div className="field">
							<label htmlFor="message">Message</label>
							<textarea
								name="message"
								id="message"
								rows="4"
								value={message}
								onChange={this.onChange}>
							</textarea>
						</div>
						<ul className="actions">
							<li><input
								type="submit"
								value="Send Message"
								className="special"
								onClick={this.props.onCloseArticle} />
							</li>
							<li><input
								type="reset"
								value="Reset"
								onClick={this.clearForm} />
							</li>
						</ul>
					</form>
					<ul className="icons">
						<li><a href="https://www.linkedin.com/in/andrew-demers/" target="_blank"
						       className="icon fa-linkedin"><span
							className="label">Twitter</span></a></li>
						<li><a href="https://github.com/demersaj" target="_blank" className="icon fa-github"><span
							className="label">Github</span></a></li>
						<li><a href="mailto: andrew.demers91@gmail.com" target="_blank"
						       className="icon fa-envelope"><span
							className="label">Email</span></a></li>
						<li><a href="https://www.instagram.com/druskeyy/" target="_blank" className="icon fa-instagram"><span
							className="label">Instagram</span></a></li>

					</ul>
					{close}
				</article>

			</div>
		);
	}
}

Main.propTypes = {
	route: PropTypes.object,
	article: PropTypes.string,
	articleTimeout: PropTypes.bool,
	onCloseArticle: PropTypes.func,
	timeout: PropTypes.bool,
	setWrapperRef: PropTypes.func.isRequired
};

export default Main;
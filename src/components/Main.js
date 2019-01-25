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
					<p>I am an experienced mechanical engineer looking to transition to a software engineering role.
						I have worked in the technology, communications, and fabrication industries in a variety of
						roles.
						I have experience in C, C++, React/Redux, and Python, and I enjoy learning new technologies.</p>
					{close}
				</article>

				<article id="work"
				         className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
				         style={{ display: 'none' }}>
					<h2 className="major">Where I've Worked</h2>
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

					<h4>Project Manager @ Scientific Machine and Welding</h4>
					July 2017 - Dec. 2017
					<ul>
						<li>
							Oversaw the company's most expensive contract ($10 million+)
						</li>
						<li>
							Provided project leadership to eight employees for project production
						</li>
					</ul>

					<h4>Site Engineer @ Great Lakes Dredge and Dock</h4>
					Nov 2016 - July 2017
					<ul>
						<li>
							Organized and conducted hydrographic, land, and beach surveys using Hypack and Hysweep
						</li>
						<li>
							Used VBA to automatically import and organize large amount of dredge data for analysis
						</li>
					</ul>
					{close}
				</article>

				<article id="about"
				         className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
				         style={{ display: 'none' }}>
					<h2 className="major">Projects</h2>
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

					<h4>Small Shell</h4>
					<ul className="icons">
						<li>Mini shell in C to demonstrate knowledge of Linux process management, signals, and I/O
							processing
						</li>
						<li><a href="https://github.com/demersaj/CS344/tree/master/Program3" target="_blank"
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
import React from 'react';
import PropTypes from 'prop-types';

import pic01 from '../images/pic01.jpg';
import pic02 from '../images/pic02.jpg';
import pic03 from '../images/pic03.jpg';

class Main extends React.Component {
	render() {

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
						I have experience in C, C++, React/Redux, and Python, and I love learning new technologies.</p>
					{close}
				</article>

				<article id="work"
				         className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
				         style={{ display: 'none' }}>
					<h2 className="major">Where I've Worked</h2>
					<span className="image main"><img src={pic02} alt="" /></span>
					<p>
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
					</p>
					{close}
				</article>

				<article id="about"
				         className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
				         style={{ display: 'none' }}>
					<h2 className="major">Projects</h2>
					<span className="image main"><img src={pic03} alt="" /></span>
					<p>
						<h4>Build-a-Burger</h4>
						<ul>
							<li>
								Dynamic burger building app created using React/Redux, Axios, Webpack, and Firebase
							</li>
						</ul>
						<ul className="icons">
							<li><a href="https://build-a-burger-399bc.firebaseapp.com/" className="icon fa-server"><span
								className="label">Live Version</span></a></li>
							<li><a href="https://github.com/demersaj/build-a-burger" className="icon fa-github"><span
								className="label">Live Version</span></a></li>
						</ul>
					</p>
					{close}
				</article>

				<article id="contact"
				         className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
				         style={{ display: 'none' }}>
					<h2 className="major">Contact</h2>
					<form method="post" action="#">
						<div className="field half first">
							<label htmlFor="name">Name</label>
							<input type="text" name="name" id="name" />
						</div>
						<div className="field half">
							<label htmlFor="email">Email</label>
							<input type="text" name="email" id="email" />
						</div>
						<div className="field">
							<label htmlFor="message">Message</label>
							<textarea name="message" id="message" rows="4"></textarea>
						</div>
						<ul className="actions">
							<li><input type="submit" value="Send Message" className="special" /></li>
							<li><input type="reset" value="Reset" /></li>
						</ul>
					</form>
					<ul className="icons">
						<li><a href="https://www.linkedin.com/in/andrew-demers/" className="icon fa-linkedin"><span
							className="label">Twitter</span></a></li>
						<li><a href="https://github.com/demersaj" className="icon fa-github"><span
							className="label">Github</span></a></li>
						<li><a href="mailto: andrew.demers91@gmail.com" className="icon fa-envelope"><span
							className="label">Email</span></a></li>
						<li><a href="https://www.instagram.com/druskeyy/" className="icon fa-instagram"><span
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
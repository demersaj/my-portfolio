import React, { Component, useRef } from 'react';
import PropTypes from 'prop-types';
import emailjs from 'emailjs-com';

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

		emailjs.sendForm('service_omsxbdt', 'template_b2byauk', event.target, 'n4exQ0f8fRzWGOwzv')
      		.then((result) => {
          		console.log('Success');
      		}, (error) => {
          	console.log(error.text);
      	});

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
					<p>As a highly motivated and results-driven product manager, I am passionate about creating innovative and user-centric products that solve real-world problems. 
						With a proven track record of leading cross-functional teams and delivering successful products to market, I am confident in my ability to drive growth and impact.
					</p>
					<p>
						My journey into product management began with a strong foundation in computer science and mechanical engineering. 
						I developed expertise in Agile software development and worked as a software engineer before transitioning into project management. 
						This technical background allows me to work closely with engineers and designers, ensuring that products are not only feasible but also scalable and maintainable.
					</p>
					<p>
						Throughout my career, I have participated in the development of complex products and features, focusing on data-driven decision-making and user feedback. 
						I am experienced in developing and executing product roadmaps, defining product requirements, conducting market research, and driving product adoption.
						I have a deep understanding of agile development methodologies and have successfully led teams using Scrum and Kanban.
					</p>
					<p>
						Above all, I am dedicated to creating products that solve real problems and make a difference in people's lives. 
						I thrive in a collaborative and fast-paced environment and am always looking for new challenges to tackle. 
						If you are looking for a driven and experienced product manager to join your team, let's connect!
					</p>
					{close}
				</article>

				<article id="work"
				         className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
				         style={{ display: 'none' }}>
					<h2 className="major">Where I've Worked</h2>

					<h4>Technical Product Manager @ webAI</h4>
					March 2024 - Present
					<ul>
						<li>Lead the full product cycle: from ideation, research, and prototyping, through to design, execution, launch,
						and post-launch optimization</li>
						<li>Partner with engineering, design, marketing, sales, and other teams to develop a cohesive product roadmap
						and execute eﬀectively</li>
						<li>Interface with customers and users and gather feedback to inform product refinements and ongoing
						development</li>
					</ul>

					<h4> Software Project Manager @ Apptronik</h4>
					June 2023 - February 2024
					<ul>
						<li>Work with external stakeholders to prioritize product features and capabilities, create a shared brain across larger teams to empower independent decision-making, and outline what success looks like for the team</li>	
						<li>Lead a team of 10 engineers in developing 0 to 1 general-purpose humanoid robotic products for several government agencies, resulting in over $15 million in revenue</li>
						<li>Create product roadmaps, feature epics, user stories, and project plans based on established product vision, feedback from customers, and analysis of collected product data</li>
					</ul>
					<h4>Associate AI Product Manager @ FlashParking</h4>
					July 2022 - April 2023
					<ul>
						<li>Manage bottlenecks, provide escalation management, anticipate and make trade-offs, and maximize business benefit while building innovative customer experiences for the Flash computer vision program</li>
						<li> Work collaboratively with key internal stakeholders including Analytics, Design, Engineering, Sales, Operations, and Customer Success teams to develop accretive value features for SaaS products</li>
						<li>Define and manage the product roadmap and product requirements using data based on market research, analysis of competitive metrics, and customer insight </li>
					</ul>
					<h4>Project Manager I & II, Strategic Projects @ FlashParking</h4>
					Sept. 2020 - July 2022
					<ul>
						<li> Collaborate with diverse customer groups to generate innovative ideas for new features, ensuring alignment with the organization's strategic objectives and product roadmap</li>
						<li> Lead end-to-end ownership of multiple B2B2C software development initiatives using Agile principles, ensuring on-time delivery, meeting budgetary constraints, and exceeding client expectations</li>
					</ul>

					<h4>Software Engineer @ Ultra Electronics</h4>
					Nov 2019 - July 2021
					<ul>
						<li>Improve the design, usability, implementation, and integration of software programs using Agile principles to meet the requirements and constraints of the customer's scope of work</li>
						<li>Install, integrate, and test virtualized hardware and software components within the company’s product line</li>
					</ul>

					<h4>Web Developer @ OroSolutions, LLC</h4>
					Mar 2019 - Nov 2019
					<ul>
						<li>Continuously develop and improve web applications to assist the accounting team in the preparation and delivery of automated, web-based financial statements</li>
						<li>Enhance the company’s automated reporting platform by improving report generation controls using a variety of APIs</li>
					</ul>
					{close}
				</article>

				<article id="about"
				         className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
				         style={{ display: 'none' }}>
					<h2 className="major">Certifications and Skills</h2>
					<h4>Certified Scrum Product Owner (CSPO) from Scrum Alliance</h4>
					June 2022
					<ul>
						<li>Develop a comprehensive understanding of the Scrum framework from a product owner's perspective</li>
						<li>Focus on effective stakeholder collaboration, development teams, and Scrum Masters</li>
						<li>Understand backlog optimization, creation of useful user stories, and maximizing busines value</li>
					</ul>

					<h4>Project Management Professional (PMP) from PMI</h4>
					April 2022
					<ul>
						<li>Understand intiating, planning, executing, monitoring and controlling, and closing of an Agile project</li>
						<li>Optimize the project life cycle using predictive, iterative, incremental, or adaptive processes</li>
						<li>Focus on strategic alignment of projects to align with the objectives of the organization</li>
					</ul>

					<h4>Technical Skills</h4>
					<ul>
						<li><b>Languages:</b> Python3, javascript ES6+, SQL, React, MongoDB/JSON</li>
						<li><b>Tools and Environments:</b> Redash, Looker, Tableau, Jira, Postman, AWS, Figma, Miro</li>
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
						<li><a href="https://www.instagram.com/drewskeey/" target="_blank" className="icon fa-instagram"><span
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
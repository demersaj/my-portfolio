import React from 'react';
import PropTypes from 'prop-types';

const Header = ( props ) => (
	<header id="header" style={props.timeout ? { display: 'none' } : {}}>
		<div className="logo">
			<span className="icon fa-diamond"></span>
		</div>
		<div className="content">
			<div className="inner">
				<p>Hi, my name is:</p>
				<h1>Andrew Demers</h1>
				<p>I am a project manager from Austin, TX.</p>
				<p>Welcome to my page.</p>
			</div>
		</div>
		<nav>
			<ul>
				<li><a href="javascript:;" onClick={() => {
					props.onOpenArticle('intro');
				}}>Intro</a></li>
				<li><a href="javascript:;" onClick={() => {
					props.onOpenArticle('work');
				}}>Work</a></li>
				<li><a href="javascript:;" onClick={() => {
					props.onOpenArticle('about');
				}}>Projects</a></li>
				<li><a href="javascript:;" onClick={() => {
					props.onOpenArticle('contact');
				}}>Contact</a></li>
			</ul>
		</nav>
	</header>
);

Header.propTypes = {
	onOpenArticle: PropTypes.func,
	timeout: PropTypes.bool
};

export default Header;

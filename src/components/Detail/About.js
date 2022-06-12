import React from "react";
import PropTypes from "react";

const About = ({ content }) => {
	return (
		<div>
			<h3 className="py-8 text-2xl font-semibold">About</h3>
			<p className="text-lg leading-8">{content}</p>
		</div>
	);
};

About.propTypes = {
	content: PropTypes.string,
};

About.defaultProps = {
	content:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ipsum vivamus velit lorem amet. Tincidunt cras volutpat aliquam porttitor molestie. Netus neque, habitasse id vulputate proin cras. Neque, vel duis sit vel pellentesque tempor. A commodo arcu tortor arcu, elit. ",
};

export default About;

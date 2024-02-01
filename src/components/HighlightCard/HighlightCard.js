import React from "react";

import "./HighlightCard.css";

import propTypes from "prop-types";

HighlightCard.propTypes = {
	index: propTypes.number.isRequired,
	highlight: propTypes.object.isRequired,
};

function HighlightCard(props) {

	const { index, highlight } = props;

	return (
		<div key={index} className='highlight-card' id={`highlight-card-${index}`}>
			<h2>{highlight.title}</h2>
			<p>{highlight.description}</p>
		</div>);
}

export default HighlightCard;
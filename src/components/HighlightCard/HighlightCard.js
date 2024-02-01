import React from "react";

import "./HighlightCard.css";

import propTypes from "prop-types";

import harsh from "../../assets/harsh.jpeg";

HighlightCard.propTypes = {
	index: propTypes.number.isRequired,
	highlight: propTypes.object.isRequired,
};

function HighlightCard(props) {

	const { index, highlight } = props;

	return (
		<div key={index} className='highlight-card' id={`highlight-card-${index}`}>
			<div className="highlight-card-content">
				<img className='highlight-img' src={harsh} alt='Harsh' />
				<div className='highlight-text-content'>
					<h2 className='highlight-title'>{highlight.title}</h2>
					<p className='highlight-desc'>{highlight.description}</p>
				</div>
			</div>
		</div>);
}

export default HighlightCard;
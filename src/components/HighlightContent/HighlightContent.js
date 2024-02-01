import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";

import "./HighlightContent.css";

import highlightData from "../../assets/dummyData";

import HighlightCard from "../HighlightCard/HighlightCard";

function HighlightContent() {

	let location = useLocation();

	useEffect(() => {
		let scrollElement = document.querySelector("#highlight-content");
		scrollElement.scrollLeft =  (scrollElement.scrollWidth - scrollElement.clientWidth ) / 2;
	}, [location]);

	return (<section id='highlight-section'>
		<div id='highlight-content'>
			{highlightData.map((highlight, index) => {
				return (<HighlightCard key={index} index={index} highlight={highlight} />);
			})}
		</div>
	</section>);
}

export default HighlightContent;
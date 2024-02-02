import React from "react";

import "./SummaryPixar.css";

import EventSummary from "../../Summaries/EventSummary/EventSummary";
import DinoSummary from "../../Summaries/DinoSummary/DinoSummary";
import ShopSummary from "../../Summaries/ShopSummary/ShopSummary";
import HooverSummary from "../../Summaries/HooverSummary/HooverSummary";

function SummaryPixar() {
	return (
		<main id='summary-pixar'>
			<section id='summary-pixar-content'>
				<div id='left-content'>
					<EventSummary />
					<div id='lower-content'>
						<ShopSummary />
						<HooverSummary />
					</div>
				</div>
				<DinoSummary />
			</section>
		</main>
	);
}

export default SummaryPixar;

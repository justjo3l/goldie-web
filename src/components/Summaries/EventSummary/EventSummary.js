import React from "react";

import "./EventSummary.css";
import "../Summary.css";

function EventSummary() {
	return (
		<article className="summary">
			<div className="summary-content" id='event-summary-content'>
				<h4 id='event-summary-title'>Upcoming Event</h4>
				<h2 id='event-summary-value'>Commencement Dinner</h2>
			</div>
		</article>
	);
}

export default EventSummary;
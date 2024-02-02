import React, { useState, useEffect } from "react";

import "./EventSummary.css";
import "../Summary.css";

import { getEventSummary } from "../../../assets/dummyApis.js";

function EventSummary() {

	const [eventSummary, setEventSummary] = useState({
		upcomingEvent: "",
	});

	useEffect(() => {
		const newSummary = getEventSummary();
		setEventSummary(newSummary);
	}, []);

	return (
		<article className="summary">
			<div className="summary-content" id='event-summary-content'>
				<h4 id='event-summary-title'>Upcoming Event</h4>
				<h2 id='event-summary-value'>{eventSummary.upcomingEvent}</h2>
			</div>
		</article>
	);
}

export default EventSummary;
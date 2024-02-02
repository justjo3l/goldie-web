import React from "react";

import "./HooverSummary.css";
import "../Summary.css";

function HooverSummary() {
	return (
		<article className="summary">
			<div className="summary-content" id='hoover-summary-content'>
				<h3 id='hoover-summary-title'>Where art thou Hoover?</h3>
				<h2 id='hoover-summary-status'>Coming Soon</h2>
			</div>
		</article>
	);
}

export default HooverSummary;
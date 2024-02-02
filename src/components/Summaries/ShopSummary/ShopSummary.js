import React from "react";

import "./ShopSummary.css";
import "../Summary.css";

function ShopSummary() {
	return (
		<article className="summary">
			<div className="summary-content" id="shop-summary-content">
				<h3 id='shop-summary-title'>Shop</h3>
				<h4 id='shop-summary-reshtock-status'>Reshtocked</h4>
				<section id='shop-summary-fields-container'>
					<ul id='shop-summary-fields'>
						<li className="shop-summary-field">
							<label id='shlut-on-duty-label'>Shlut on Duty</label>
							<p id='shlut-on-duty-value'>Alannah Scalzo</p>
						</li>
						<li className="shop-summary-field">
							<label id='shopen-label'>Shopen</label>
							<p id='shopen-value'>08:00 PM</p>
						</li>
						<li className="shop-summary-field">
							<label id='shclose-label'>Shclose</label>
							<p id='shclose-value'>11:00 PM</p>
						</li>
					</ul>
				</section>
				<h2 id='shop-summary-shopen-status'>Shclosed</h2>
			</div>
		</article>
	);
}

export default ShopSummary;
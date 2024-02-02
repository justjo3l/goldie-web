import React, { useState, useEffect } from "react";

import getShopSummary from "../../../assets/dummyApis";

import "./ShopSummary.css";
import "../Summary.css";

function ShopSummary() {

	const [shopSummary, setShopSummary] = useState({
		reshtockState: "",
		shopenState: "",
		shlutOnDuty: ""
	});

	const updateReshtockStateStyle = (shopSummary) => {
		if (shopSummary.reshtockState === "reshtocked") {
			document.getElementById("shop-summary-reshtock-status").classList.add("positive");
		} else {
			document.getElementById("shop-summary-reshtock-status").classList.add("negative");
		}
	};

	const updateShopenStateStyle = (shopSummary) => {
		if (shopSummary.shopenState === "shopen") {
			document.getElementById("shop-summary-shopen-status").classList.add("positive");
		} else {
			document.getElementById("shop-summary-shopen-status").classList.add("negative");
		}
	};

	useEffect(() => {
		const newSummary = getShopSummary();
		updateReshtockStateStyle(newSummary);
		updateShopenStateStyle(newSummary);
		setShopSummary(newSummary);
	}, []);

	return (
		<article className="summary">
			<div className="summary-content" id="shop-summary-content">
				<h3 id='shop-summary-title'>Shop</h3>
				<h4 id='shop-summary-reshtock-status'>{shopSummary.reshtockState}</h4>
				<section id='shop-summary-fields-container'>
					<ul id='shop-summary-fields'>
						<li className="shop-summary-field">
							<label id='shlut-on-duty-label'>Shlut on Duty</label>
							<p id='shlut-on-duty-value'>{shopSummary.shlutOnDuty}</p>
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
				<h2 id='shop-summary-shopen-status'>{shopSummary.shopenState}</h2>
			</div>
		</article>
	);
}

export default ShopSummary;
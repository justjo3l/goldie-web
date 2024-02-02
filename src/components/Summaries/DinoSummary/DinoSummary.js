import React from "react";

import "./DinoSummary.css";
import "../Summary.css";

import arrow from "../../../assets/arrow.png";

function DinoSummary() {
	return (
		<article className="summary">
			<div className="summary-content" id="dino-summary-content">
				<header id="dino-summary-header">
					<button id="dino-summary-prev-btn" className="dino-btn">
						<img src={arrow} alt="Previous arrow" height={"30px"} width={"30px"}/>
					</button>
					<h3 id="dino-summary-title">{"Today's Dino"}</h3>
					<button id="dino-summary-next-btn" className="dino-btn">
						<img src={arrow} alt="Next arrow" style={{"transform" : "rotate(180deg)"}} height={"30px"} width={"30px"} />
					</button>
				</header>
				<main id="dino-summary-meal-content">
					<section id="dino-summary-breakfast-content" className="dino-summary-meal-container">
						<h4 className="dino-summary-meal-title">Breakfast</h4>
						<h5 className="dino-summary-meal-value">{"Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</h5>
					</section>
					<section id="dino-summary-lunch-content" className="dino-summary-meal-container">
						<h4 className="dino-summary-meal-title">Lunch</h4>
						<h5 className="dino-summary-meal-value">{"Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</h5>
					</section>
					<section id="dino-summary-dinner-content" className="dino-summary-meal-container">
						<h4 className="dino-summary-meal-title">Dinner</h4>
						<h5 className="dino-summary-meal-value">{"Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</h5>
					</section>
				</main>
			</div>
		</article>
	);
}

export default DinoSummary;
import React, { useContext } from "react";

import { FilterContext } from "../FilterSection";

import "./FilterBar.css";

function FilterBar() {

	const values = ["summary", "events", "announcements", "shop", "laundry"];

	const { setSelected } = useContext(FilterContext);

	const updateSelected = (value) => {
		const buttons = document.querySelectorAll(".filter-button");
		buttons.forEach(button => {
			button.classList.remove("selected");
		});
		const selectedButton = document.querySelector(`[value=${value}]`);
		selectedButton.classList.add("selected");
	};

	const handleScroll = (e) => {
		let selectedIndex = 0;
		const scrollPercentage = e.target.scrollLeft / e.target.scrollWidth;
		if (scrollPercentage >= 0.1) {
			selectedIndex = Math.ceil(scrollPercentage * (values.length - 1));
		}
		setSelected(values[selectedIndex]);
		updateSelected(values[selectedIndex]);
	};

	const handleFilter = (e) => {
		setSelected(e.target.value);
		updateSelected(e.target.value);
	};

	return (
		<nav id='filterbar'>
			<ul id='filterbar-container'>
				<div id='filterbar-options' onScroll={handleScroll}>
					<div>
						<li>
							<button className='filter-button selected' value='summary' onClick={handleFilter}>Summary</button>
						</li>
					</div>
					<div>
						<li>
							<button className='filter-button' value='events' onClick={handleFilter}>Events</button>
						</li>
					</div>
					<div>
						<li>
							<button className='filter-button' value='announcements' onClick={handleFilter}>Announcements</button>
						</li>
					</div>
					<div>
						<li>
							<button className='filter-button' value='shop' onClick={handleFilter}>Shop</button>
						</li>
					</div>
					<div>
						<li>
							<button className='filter-button' value='laundry' onClick={handleFilter}>Laundry</button>
						</li>
					</div>
				</div>
			</ul>
		</nav>
	);
}

export default FilterBar;
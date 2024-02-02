import React, { useContext } from "react";

import { FilterContext } from "../FilterSection";

import "./FilterBar.css";

function FilterBar() {

	const { setSelected } = useContext(FilterContext);

	const handleFilter = (e) => {
		setSelected(e.target.value);
		const buttons = document.querySelectorAll(".filter-button");
		buttons.forEach(button => {
			button.classList.remove("selected");
		});
		e.target.classList.add("selected");
	};

	return (
		<nav id='filterbar'>
			<ul id='filterbar-container'>
				<div id='filterbar-options'>
					<li>
						<button className='filter-button selected' value='summary' onClick={handleFilter}>Summary</button>
					</li>
					<li>
						<button className='filter-button' value='events' onClick={handleFilter}>Events</button>
					</li>
					<li>
						<button className='filter-button' value='announcements' onClick={handleFilter}>Announcements</button>
					</li>
					<li>
						<button className='filter-button' value='shop' onClick={handleFilter}>Shop</button>
					</li>
					<li>
						<button className='filter-button' value='laundry' onClick={handleFilter}>Laundry</button>
					</li>
				</div>
			</ul>
		</nav>
	);
}

export default FilterBar;
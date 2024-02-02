import React, { useContext } from "react";

import { FilterContext } from "../FilterSection";

import "./FilterContent.css";

function FilterContent() {

	const { selected } = useContext(FilterContext);

	return (
		<section id='filter-content'>
			{selected === "summary" && <p>Summary</p>}
			{selected === "events" && <p>Events</p>}
			{selected === "announcements" && <p>Announcements</p>}
			{selected === "shop" && <p>Shop</p>}
			{selected === "laundry" && <p>Laundry</p>}
		</section>
	);
}

export default FilterContent;
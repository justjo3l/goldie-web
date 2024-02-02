import React, { useContext } from "react";

import { FilterContext } from "../FilterSection";

import SummaryPixar from "../../SummaryPixar/SummaryPixar";

import "./FilterContent.css";

function FilterContent() {

	const { selected } = useContext(FilterContext);

	return (
		<section id='filter-content'>
			{selected === "summary" && <SummaryPixar />}
			{selected === "events" && <p>Events</p>}
			{selected === "announcements" && <p>Announcements</p>}
			{selected === "shop" && <p>Shop</p>}
			{selected === "laundry" && <p>Laundry</p>}
		</section>
	);
}

export default FilterContent;
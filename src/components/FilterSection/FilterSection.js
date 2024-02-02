import React, { useState, createContext } from "react";

import "./FilterSection.css";

import FilterBar from "./FilterBar/FilterBar";
import FilterContent from "./FilterContent/FilterContent";

export const FilterContext = createContext();

function FilterSection() {

	const [selected, setSelected] = useState("summary");

	return (
		<section id='filter-section'>
			<FilterContext.Provider value={{ selected, setSelected }}>
				<FilterBar />
				<FilterContent />
			</FilterContext.Provider>
		</section>
	);
}

export default FilterSection;
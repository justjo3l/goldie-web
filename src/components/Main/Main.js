import React from "react";

import "./Main.css";

import propTypes from "prop-types";

Main.propTypes = {
	children: propTypes.node.isRequired
};

function Main({ children }) {
	return (
		<main id='main'>
			{ children }
		</main>
	);
}

export default Main;

import React from "react";

import "./Header.css";

import propTypes from "prop-types";

Header.propTypes = {
	children: propTypes.node.isRequired
};

function Header({ children }) {
	return (
		<header id='header'>
			{ children }
		</header>
	);
}

export default Header;

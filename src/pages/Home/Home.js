import React from "react";

import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";

import NavBar from "../../components/NavBar/NavBar";

import HighlightContent from "../../components/HighlightContent/HighlightContent";

import "./Home.css";

function Home() {
	return (
		<div className="Home">
			<Header>
				<title>Goldie Web</title>
				<NavBar />
			</Header>
			<Main>
				<HighlightContent />
			</Main>
			<Footer />
		</div>
	);
}

export default Home;

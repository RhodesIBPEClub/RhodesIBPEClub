import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

import NavBar from './packages/Common/Nav/index';
import Home from './packages/pages/home';
import About from './packages/pages/about';

const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	max-width: 1280px;
	padding: 2rem;
	width: 100wh;
	height: 100vh;
	max-width: 1280px;
`;

function App() {
	return (
		<AppContainer>
			<Router>
				<NavBar />
				<Routes>
					<Route path="/RhodesIBPEClub/" element={<Home />} />
					<Route path="/RhodesIBPEClub/about" element={<About />} />
				</Routes>
			</Router>
		</AppContainer>
	);
}

const appWrapper = () => {
	return <App />;
};

export default appWrapper;

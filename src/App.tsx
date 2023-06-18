import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import NavBar from './packages/Common/Nav/index';
import Home from './packages/pages/home';
import About from './packages/pages/about';

const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 2rem;
	width: 100wh;
	height: 100vh;
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

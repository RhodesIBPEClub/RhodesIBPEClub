import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
// Components
import NavBar from './packages/Common/Nav/index';
import Footer from './packages/Common/Footer/index';
// Pages
import Home from './packages/pages/home';
import About from './packages/pages/about';
import Events from './packages/pages/events';

const AppContainer = styled.div`
	text-align: center;
	width: 100%;
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
					<Route path="/RhodesIBPEClub/events" element={<Events />} />
				</Routes>
				<Footer />
			</Router>
		</AppContainer>
	);
}

const appWrapper = () => {
	return <App />;
};

export default appWrapper;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import createGlobalStyle from 'styled-components';
// Components
import NavBar from './packages/Common/Nav/index';
import Footer from './packages/Common/Footer/index';
// Pages
import Home from './packages/pages/home/home';
import About from './packages/pages/about/about';
import Events from './packages/pages/events/events';
// Styles
import './globals.css';

const AppContainer = styled.div`
	text-align: center;
	width: 100%;
	height: 100vh;
	font-family: 'Inconsolata', monospace;
	font-weight: 400;
	font-synthesis: none;
	text-rendering: optimizeLegibility;
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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

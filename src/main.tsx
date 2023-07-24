import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

// Components
import NavBar from './packages/Common/Nav/index';
import Footer from './packages/Common/Footer/index';
// Pages
import Home from './packages/pages/home';
import About from './packages/pages/about';
import Contact from './packages/pages/contact';
import Team from './packages/pages/team';
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
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/RhodesIBPEClub/contact" element={<Contact />} />
					<Route path="/RhodesIBPEClub/ourteam" element={<Team />} />
				</Routes>
			</Router>
		</AppContainer>
	);
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

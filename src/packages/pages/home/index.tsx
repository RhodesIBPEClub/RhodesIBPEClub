import React from 'react';
import ButtonLink from '../../Common/Base/ButtonLink';
import styled from 'styled-components';

const HomeH1 = styled.h1`
	font-size: 3.2em;
	line-height: 1.1;
`;

const Home = () => {
	return (
		<div>
			<HomeH1>Investment Banking and Private Equity Club</HomeH1>
			<HomeH1>at Rhodes College</HomeH1>
			<div className="card">
				<p className="read-the-docs">Click me!</p>
			</div>
			<ButtonLink />
		</div>
	);
};

export default Home;

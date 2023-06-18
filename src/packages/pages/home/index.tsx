import React from 'react';
import ButtonLink from '../../Common/Base/ButtonLink';
import styled from 'styled-components';

const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	max-width: 1280px;
	padding: 2rem;
	width: 100wh;
	height: 100vh;
`;

const HomeH1 = styled.h1`
	font-size: 3.2em;
	line-height: 1.1;
`;

const Home = () => {
	return (
		<HomeContainer>
			<HomeH1>Investment Banking and Private Equity Club</HomeH1>
			<HomeH1>at Rhodes College</HomeH1>
			<ButtonLink />
		</HomeContainer>
	);
};

export default Home;

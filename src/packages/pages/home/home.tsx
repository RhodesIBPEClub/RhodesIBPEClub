import React from 'react';
import ButtonLink from '../../Common/Base/ButtonLink';
import styled from 'styled-components';

const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 2rem;
	width: 100wh;
	height: 100vh;
`;

const HeaderContainer = styled.div`
	padding-top: 7em;
`;

const HomeH1 = styled.h1`
	font-size: 3.2em;
	line-height: 1.1;
	color: #fff;
`;

const HomeImg = styled.img`
	width: 100%;
	height: 70%;
	object-fit: cover;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	color: white;
	font-weight: bold;
`;

const Home = () => {
	return (
		<HomeContainer>
			<HomeImg src={'src/assets/img/testing123.jpeg'} />
			<HeaderContainer>
				<HomeH1>Preparing Rhodes College Students</HomeH1>
				<HomeH1> for Success in the Finance Industry Since 2023</HomeH1>
			</HeaderContainer>
		</HomeContainer>
	);
};

export default Home;

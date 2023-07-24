import React from 'react';
import ButtonLink from '../Common/Base/ButtonLink';
import styled from 'styled-components';
import backgroundimage from '../../assets/images/backgroundimage.jpeg';

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
	padding-top: 10%;
	padding-bottom: 35%;
`;

const LinkedText = styled.a`
	text-decoration: none;
	color: #111;
	&:hover {
		color: #b22222;
		border-bottom: 2px solid #b22222;
	}
`;

const ContactText = styled.h2`
	font-size: 2em;
	color: inherit;
	border-bottom: 2px solid transparent;
	transition: all 220ms ease-in-out;
	&:hover {
		border-bottom: 2px solid #b22222;
	}
`;

const LowerContainer = styled.div``;

const HomeH1 = styled.h1`
	font-size: 3.2em;
	line-height: 1.1;
	color: inherit;
`;

const HomeH2 = styled.h2`
	font-size: 2em;
	color: inherit;
`;

const BackgroundImage = styled.img`
	width: 100%;
	height: 95%;
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
			<BackgroundImage src={backgroundimage} />
			<HeaderContainer>
				<HomeH1>Rhodes IBPE Club</HomeH1>
				<LinkedText href="/IBPE/contact">
					<ContactText>Contact us</ContactText>
				</LinkedText>
			</HeaderContainer>
			<LowerContainer>
				<HomeH2>Preparing Rhodes College Students</HomeH2>
				<HomeH2> for Success in the Finance Industry Since 2023</HomeH2>
			</LowerContainer>
		</HomeContainer>
	);
};

export default Home;

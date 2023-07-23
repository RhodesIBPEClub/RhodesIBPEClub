import React from 'react';
import aboutPage from '../../assets/images/aboutPage.jpeg';
import styled from 'styled-components';

const BackgroundImage = styled.img`
	width: 100%;
	height: 40%;
	object-fit: cover;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	color: white;
	font-weight: bold;
`;

const About = () => {
	return (
		<div>
			<BackgroundImage src={aboutPage} />
			<h1>About</h1>
			<p>
				At the Rhodes College Investment Banking and Private Equity Club, we bring together a community of
				ambitious individuals driven by a shared passion for finance. Our mission is to provide a platform for
				students to enhance their financial skills and expand their professional network. As a member of our
				club, you will have the opportunity to develop invaluable expertise in investment banking and private
				equity. Through interactive workshops, engaging discussions, and guest speaker events, we aim to equip
				you with the knowledge and connections necessary to thrive in these competitive fields. Join us as we
				foster an environment of collaboration, learning, and growth, empowering Rhodes College students to
				excel in the world of finance.
			</p>
		</div>
	);
};

export default About;

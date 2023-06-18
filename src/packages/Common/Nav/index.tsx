import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import Logo from '../Base/logo';

const NavbarContainer = styled.div`
	width: 100%;
	height: 60px;
	display: flex;
	align-items: center;
	padding: 0 1.5em;
`;

const LeftSection = styled.div`
	display: flex;
`;

const MiddleSection = styled.div`
	display: flex;
	flex: 2;
	justify-content: center;
`;

const Navbar = () => {
	return (
		<NavbarContainer>
			<LeftSection>
				<Logo imgPath={'src/assets/img/logo.png'} />
			</LeftSection>
			<MiddleSection>
				<Nav />
			</MiddleSection>
		</NavbarContainer>
	);
};

export default Navbar;

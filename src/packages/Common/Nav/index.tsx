import React from 'react';
import styled from 'styled-components';
import NavLinks from './NavLinks';
import Logo from '../Base/logo';
import logoimage from '../../../assets/images/logo.png';

const NavbarContainer = styled.div`
	width: 100%;
	height: 60px;
	display: flex;
	align-items: center;
	padding-top: 1em;
`;

const LeftSection = styled.div`
	display: flex;
	padding-left: 1em;
	justify-content: flex-start;
`;

const MiddleSection = styled.div`
	display: flex;
	flex: 2;
	justify-content: center;
`;

const RightSection = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-end;
`;

const Navbar = () => {
	return (
		<NavbarContainer>
			<LeftSection>
				<Logo imgPath={logoimage} text={'Rhodes IBPE Club'} />
			</LeftSection>
			<RightSection>
				<NavLinks />
			</RightSection>
		</NavbarContainer>
	);
};

export default Navbar;

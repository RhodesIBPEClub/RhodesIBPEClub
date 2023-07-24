import React from 'react';
import styled from 'styled-components';
import NavLinks from './NavLinks';
import { MobileNavLinks } from './mobileNavLinks';
import { useMediaQuery } from 'react-responsive';
import { DeviceSize } from './responsive';
import Logo from '../Base/logo';
import logoimage from '../../../assets/images/logo.png';

const NavbarContainer = styled.div`
	width: 100%;
	height: 10%;
	display: flex;
	align-items: center;
	background-color: #fff;
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

const LogoText = styled.a`
	text-decoration: none;
	font-size: 25px;
	margin: 0;
	margin-left: 4px;
	color: #111;
	font-weight: 500;
	padding: 0 1.1em;

	&:hover {
		color: #b22222;
	}
`;

const Navbar = () => {
	const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

	return (
		<NavbarContainer>
			<LeftSection>
				<LogoText href="/IBPE/">{'Rhodes IBPE Club'}</LogoText>
			</LeftSection>
			<RightSection>{isMobile ? <MobileNavLinks /> : <NavLinks />}</RightSection>
		</NavbarContainer>
	);
};

export default Navbar;

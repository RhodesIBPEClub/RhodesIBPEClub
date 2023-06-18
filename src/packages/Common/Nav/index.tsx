import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

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
				<p>logo here</p>
			</LeftSection>
			<MiddleSection>
				<Nav />
			</MiddleSection>
		</NavbarContainer>
	);
};

export default Navbar;

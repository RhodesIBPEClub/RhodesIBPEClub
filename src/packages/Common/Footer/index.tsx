import React from 'react';
import styled from 'styled-components';
import Logo from '../Base/logo';
import logoimage from '../../../assets/images/logo.png';

const FooterContainer = styled.div`
	background-color: #111;
`;

const Footer = () => {
	return (
		<FooterContainer>
			<Logo imgPath={logoimage} text={'Rhodes IBPE Club'} />
		</FooterContainer>
	);
};

export default Footer;

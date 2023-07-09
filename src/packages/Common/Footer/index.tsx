import React from 'react';
import styled from 'styled-components';
import Logo from '../Base/logo';

const FooterContainer = styled.div`
	background-color: #111;
`;

const Footer = () => {
	return (
		<FooterContainer>
			<Logo imgPath={'src/assets/img/logo.png'} text={'Rhodes IBPE Club'} />
		</FooterContainer>
	);
};

export default Footer;

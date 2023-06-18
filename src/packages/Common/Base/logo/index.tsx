import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const LogoImg = styled.div`
	width: 50px;
	height: 50px;

	img {
		border-radius: 10px;
		width: 100%;
		height: 100%;
	}
`;

const LogoText = styled.a`
	text-decoration: none;
	font-size: 25px;
	margin: 0;
	margin-left: 4px;
	color: #fff;
	font-weight: 500;
	padding: 0 1.1em;

	&:hover {
		color: #ffd700;
	}
`;

export function Logo(props: { imgPath: string | undefined }) {
	return (
		<LogoWrapper>
			<LogoImg>
				<a href="/RhodesIBPEClub/">
					<img src={props.imgPath} alt="logo" />
				</a>
			</LogoImg>
			<LogoText href="/RhodesIBPEClub/">Rhodes IBPE Club</LogoText>
		</LogoWrapper>
	);
}

export default Logo;

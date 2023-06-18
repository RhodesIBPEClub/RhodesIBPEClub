import React from 'react';
import styled from 'styled-components';

const NavLinksContainer = styled.div`
	display: flex;
	align-items: center;
`;

const LinksWrapper = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	list-style: none;
`;

const LinkItem = styled.li`
	padding: 0 1.1em;
	color: #fff;
	font-weight: 500;
	font-size: 25px;
	align-items: center;
	justify-content: center;
	display: flex;
	border-top: 2px solid transparent;
	transition: all 220ms ease-in-out;

	&:hover {
		border-top: 2px solid #2ecc71;
	}
`;

const Link = styled.a`
	text-decoration: none;
	color: inherit;
	font-size: inherit;

	&:hover {
		color: #2ecc71;
	}
`;

const Nav = (props: any) => {
	return (
		<NavLinksContainer>
			<LinksWrapper>
				<LinkItem>
					<Link href="/RhodesIBPEClub/">Home</Link>
				</LinkItem>
				<LinkItem>
					<Link href="/RhodesIBPEClub/about">About</Link>
				</LinkItem>
				<LinkItem>
					<Link href="/RhodesIBPEClub/contact">Contact</Link>
				</LinkItem>
			</LinksWrapper>
		</NavLinksContainer>
	);
};

export default Nav;

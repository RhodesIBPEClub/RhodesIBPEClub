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
	color: #111;
	font-weight: 500;
	font-size: 25px;
	align-items: center;
	justify-content: center;
	display: flex;
	border-top: 2px solid transparent;
	transition: all 220ms ease-in-out;
`;

const Link = styled.a`
	text-decoration: none;
	color: inherit;
	font-size: inherit;

	&:hover {
		color: #b22222;
	}
`;

const NavLinks = () => {
	return (
		<NavLinksContainer>
			<LinksWrapper>
				<LinkItem>
					<Link href="/IBPE/">Home</Link>
				</LinkItem>
				<LinkItem>
					<Link href="/IBPE/about">About</Link>
				</LinkItem>
				<LinkItem>
					<Link href="/IBPE/contact">Contact</Link>
				</LinkItem>
				<LinkItem>
					<Link href="/IBPE/ourteam">Our Team</Link>
				</LinkItem>
			</LinksWrapper>
		</NavLinksContainer>
	);
};

export default NavLinks;

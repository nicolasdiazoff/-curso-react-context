import React from 'react';
import styled from 'styled-components';

const StyledHeder = styled.div`
	width: 100%;
	background-color: #f2f2f2;
	min-height: 0;
	box-sizing: border-box;
	padding: 1.2rem;
	padding-top: 3rem;
	@media only screen and (min-width: 768px) {
		padding-left: 4rem;
		padding-right: 4rem;
	}
	@media only screen and (min-width: 1024px) {
		max-width: 600px;
		padding-left: 4rem;
		padding-right: 4rem;
	}
`;

const StyledHederBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	a:nth-child(1) {
		background-color: #445ee9;
		padding: 0.4rem;
		padding-left: 1.2rem;
		padding-right: 1.2rem;
		text-align: center;
		border: none;
		border-radius: 5px;
		color: #fff;
		text-decoration: none;
	}
	a:nth-child(2) {
		margin-left: 4px;
		background-color: #f2f2f2;
		color: #445ee9;
		padding: 0.4rem;
		padding-left: 1.2rem;
		padding-right: 1.2rem;
		text-align: center;
		border: none;
		border-radius: 5px;
	}
`;

const StyledHederCounter = styled.p`
	color: #4f4f4f;
	margin: 0;
	font-weight: 600;
`;

const StyledHederTitle = styled.h1`
	color: #000;
	font-weight: 800;
	margin-top: 0.2rem;
	margin-bottom: 0.6rem;
`;

const Header = ({ title, total, children }) => {
	return (
		<StyledHeder>
			<StyledHederCounter>Total {total}</StyledHederCounter>
			<StyledHederTitle>{title}</StyledHederTitle>
			<StyledHederBox>{children}</StyledHederBox>
		</StyledHeder>
	);
};

export default Header;

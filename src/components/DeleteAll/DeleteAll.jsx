import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { CounterContext } from '../../context/counterContext';

const StyledButton = styled.button`
	background-color: ${({ theme }) => theme.colors.red};
	border: none;
	color: ${({ theme }) => theme.colors.white};
	outline: none;
	font-size: 1.2rem;
	font-weight: 600;
	box-sizing: border-box;
	padding: 10px;
	margin: auto;
	margin-top: 300px;
	margin-bottom: 30px;
	width: 100%;
	opacity: 1;
	&:disabled {
		opacity: 0.5;
	}
`;

function DeleteAll() {
	const { dispatch } = useContext(CounterContext);

	const handleDisabled = () => {
		dispatch({ type: 'deleteCounters' });
	};

	return (
		<StyledButton onClick={handleDisabled} disabled>
			Delete all counters
		</StyledButton>
	);
}

export default DeleteAll;

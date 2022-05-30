import React, { useContext } from 'react';
import styled from 'styled-components';
import { CounterContext } from '../../context/counterContext';

const StyledItem = styled.div`
	display: flex;
	flex-direction: row;
	align-content: space-between;
	align-items: center;
	width: 100%;
	margin: auto;
	margin-bottom: 10px;
	box-sizing: border-box;
	padding: 20px;
	border-radius: 5px;
	border: 1px solid ${({ theme }) => theme.colors.gray2};
`;

const StyledItemBox = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledItemBoxButton = styled(StyledItemBox)`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
`;

const StyledItemCount = styled.h1`
	font-size: 2.2rem;
	font-weight: 800;
	margin: 0;
	color: ${({ theme }) => theme.colors.black};
`;

const StyledItemTitle = styled.p`
	font-size: 1rem;
	font-weight: 600;
	margin: 0;
	color: #4f4f4f;
`;

const StyledButton = styled.button`
	background-color: ${({ theme }) => theme.colors.gray2};
	width: 50px;
	height: 50px;
	border-radius: 50px;
	border: none;
	color: ${({ theme }) => theme.colors.black};
	outline: none;
	font-size: 2rem;
	font-weight: 600;
	margin: 0;
	margin-left: 5px;
	margin-right: 5px;
`;

function ItemCounter({ id, title, count }) {
	const { dispatch } = useContext(CounterContext);
	return (
		<StyledItem>
			<StyledItemBox>
				<StyledItemCount>{count}</StyledItemCount>
				<StyledItemTitle>{title}</StyledItemTitle>
			</StyledItemBox>
			<StyledItemBoxButton>
				<StyledButton
					onClick={() => dispatch({ type: 'increment', id: id })}>
					+
				</StyledButton>
				<StyledButton
					onClick={() => dispatch({ type: 'decrement', id: id })}>
					-
				</StyledButton>
			</StyledItemBoxButton>
		</StyledItem>
	);
}

export default ItemCounter;

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { CounterContext } from '../context/counterContext';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.colors.white};
	width: 100%;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.indigo};
	position: relative;
`;

const StyledBigCounter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 80vw;
	height: 80vw;
	border-radius: 50%;
	box-sizing: border-box;
	border: 16px solid #5d74f4;
	background: rgb(67, 93, 232);
	background: linear-gradient(
		50deg,
		rgba(67, 93, 232, 1) 0%,
		rgba(88, 111, 241, 1) 100%
	);
`;

const StyledBigCounterNumber = styled.h1`
	color: ${({ theme }) => theme.colors.white};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	font-size: 6rem;
	margin: 0;
`;

const StyledBigCounterSubtitle = styled.h2`
	color: ${({ theme }) => theme.colors.white};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	font-size: 1rem;
	margin: 0;
	text-transform: uppercase;
`;

const StyledControls = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	width: 80%;
	margin: 0;
	margin-top: 10px;
	margin-left: auto;
	margin-right: auto;
`;

const StyledButton = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: #6178ea;
	width: 20vw;
	height: 20vw;
	border-radius: 50%;
	box-sizing: border-box;
	border: none;
	color: ${({ theme }) => theme.colors.white};
	outline: none;
	font-size: 5rem;
	font-weight: 600;
	margin: 0;
`;

const StyledOptions = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin: 0;
	position: absolute;
	box-sizing: border-box;
	padding-left: 20px;
	padding-right: 20px;
	bottom: 20px;
`;

const StyledButtonOptions = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: #6178ea;
	border-radius: 50px;
	box-sizing: border-box;
	border: none;
	padding: 10px;
	padding-left: 20px;
	padding-right: 20px;
	color: ${({ theme }) => theme.colors.white};
	outline: none;
	font-size: 20px;
	font-weight: 600;
	margin: 0;
`;

function CreateScreen() {
	const { state, dispatch } = useContext(CounterContext);
	const [counter, setCounter] = useState({
		title: 'New Counter',
		count: 0,
		archive: false,
	});

	const handleIncrement = () => {
		setCounter({ ...counter, count: counter.count + 1 });
		dispatch({ type: 'increment', id: counter.id });
	};

	const handleDecrement = () => {
		setCounter({ ...counter, count: counter.count - 1 });
		dispatch({ type: 'decrement', id: counter.id });
	};

	const handleReset = () => {
		dispatch({ type: 'reset', id: counter.id });
		setCounter({ ...counter, count: 0 });
	};

	const handleArchive = () => {
		dispatch({ type: 'archive', id: counter.id });
		setCounter({ ...counter, archive: true });
	};

	const handleUnArchive = () => {
		dispatch({ type: 'unarchive', id: counter.id });
		setCounter({ ...counter, archive: false });
	};

	useEffect(() => {
		dispatch({ type: 'create' });
	}, []);

	useEffect(() => {
		setCounter({ ...counter, id: state.counters.length });
	}, [state.counters]);

	return (
		<Container>
			<StyledBigCounter>
				<StyledBigCounterNumber>{counter.count}</StyledBigCounterNumber>
				<StyledBigCounterSubtitle>count</StyledBigCounterSubtitle>
			</StyledBigCounter>
			<StyledControls>
				<StyledButton onClick={handleIncrement}>+</StyledButton>
				<StyledButton onClick={handleDecrement}>-</StyledButton>
			</StyledControls>
			<StyledOptions>
				<StyledButtonOptions
					onClick={
						!counter.archive ? handleArchive : handleUnArchive
					}>
					{!counter.archive ? 'archive' : 'unarchive'}
				</StyledButtonOptions>
				<StyledButtonOptions onClick={handleReset}>
					reset
				</StyledButtonOptions>
			</StyledOptions>
		</Container>
	);
}

export default CreateScreen;

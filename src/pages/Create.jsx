import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.colors.white};
	width: 100%;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.indigo};
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

function CreateScreen() {
	return (
		<Container>
			<StyledBigCounter>
				<StyledBigCounterNumber>100</StyledBigCounterNumber>
				<StyledBigCounterSubtitle>count</StyledBigCounterSubtitle>
			</StyledBigCounter>
			<StyledControls>
				<StyledButton
				// onClick={() => dispatch({ type: 'increment', id: id })}
				>
					+
				</StyledButton>
				<StyledButton
				// onClick={() => dispatch({ type: 'decrement', id: id })}
				>
					-
				</StyledButton>
			</StyledControls>
			{/* <StyledOptions>
				<h1>options</h1>
			</StyledOptions> */}
		</Container>
	);
}

export default CreateScreen;

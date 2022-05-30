import React from 'react';
import styled from 'styled-components';
import ItemCounter from './ItemCounter';
import Image from '../../assets/icons/alarm_add_black_24dp 1.svg';

const NotCounters = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.colors.black};
`;

const NotCountersIcon = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	padding: 50px;
	border-radius: 100px;
	margin-top: 56px;
	background-color: ${({ theme }) => theme.colors.gray2};
`;

const NotCountersLabel = styled.h1`
	margin-top: 18px;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	font-size: ${({ theme }) => theme.fontSize.size18};
	color: ${({ theme }) => theme.colors.black};
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-height: 0;
	box-sizing: border-box;
	padding: 16px;
`;

function ListCounter({ counters }) {
	return (
		<>
			{counters && counters.length <= 0 ? (
				<NotCounters>
					<NotCountersIcon>
						<img src={Image} alt='dont have counters' />
					</NotCountersIcon>
					<NotCountersLabel>
						You don't have counters yet
					</NotCountersLabel>
				</NotCounters>
			) : (
				<Container>
					{counters.map((counter, index) => (
						<ItemCounter {...counter} id={index} />
					))}
				</Container>
			)}
		</>
	);
}

export default ListCounter;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import ListCounter from '../ListCounter/ListCounter';
import { CounterContext } from '../../context/counterContext';

function CounterScreen() {
	const { state } = useContext(CounterContext);
	return (
		<>
			<Header title={'Counters'} total={0}>
				<Link to='/create'>start new</Link>
				<Link to='/archive'>see archives</Link>
			</Header>
			<ListCounter counters={state.counters} />
		</>
	);
}

export default CounterScreen;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import ListCounter from '../components/ListCounter/ListCounter';
import { CounterContext } from '../context/counterContext';

function CounterScreen() {
	const { state } = useContext(CounterContext);

	const counters = state.counters.filter(
		(counter) => counter.archive === false
	);

	return (
		<>
			<Header title={'Counters'} total={counters.length}>
				<Link to='/create'>start new</Link>
				<Link to='/archive'>see archives</Link>
			</Header>
			<ListCounter counters={counters} />
		</>
	);
}

export default CounterScreen;

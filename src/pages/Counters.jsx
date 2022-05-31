import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import ListCounter from '../components/ListCounter/ListCounter';
import { CounterContext } from '../context/counterContext';

function CounterScreen() {
	const { state } = useContext(CounterContext);
	return (
		<>
			<Header title={'Counters'} total={state.total}>
				<Link to='/create'>start new</Link>
				<Link to='/archive'>see archives</Link>
			</Header>
			<ListCounter counters={state.counters} />
		</>
	);
}

export default CounterScreen;

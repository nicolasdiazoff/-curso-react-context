import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import ListCounter from './ListCounter';
import { CounterContext } from '../Context/counterContext';

function CounterScreen() {
	const { state } = useContext(CounterContext);
	return (
		<>
			<Header
				title={'Counters'}
				total={0}
				buttons={
					<>
						<Link to='/create'>start new</Link>
						<Link to='/archive'>see archives</Link>
					</>
				}
			/>
			<ListCounter counters={state.counters} />
		</>
	);
}

export default CounterScreen;

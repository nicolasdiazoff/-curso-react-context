import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DeleteAll from '../components/DeleteAll/DeleteAll';
import Header from '../components/Header/Header';
import ListCounter from '../components/ListCounter/ListCounter';
import { CounterContext } from '../context/counterContext';

function ArchiveScreen() {
	const { state } = useContext(CounterContext);
	const archives = state.counters.filter(
		(counter) => counter.archive === true
	);
	return (
		<>
			<Header title={'Archives'} total={archives.length}>
				<Link to='/create'>start new</Link>
				<Link to='/'>see counters</Link>
			</Header>
			<ListCounter counters={archives} />
			<DeleteAll />
		</>
	);
}

export default ArchiveScreen;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import ListCounter from '../components/ListCounter/ListCounter';
import { CounterContext } from '../context/counterContext';

function ArchiveScreen() {
	const { state } = useContext(CounterContext);
	return (
		<>
			<Header title={'Archives'} total={state.totalArchives}>
				<Link to='/create'>start new</Link>
				<Link to='/'>see counters</Link>
			</Header>
			<ListCounter counters={state.archives} />
		</>
	);
}

export default ArchiveScreen;

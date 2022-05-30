import React from 'react';
import Header from '../components/Header/Header';

function SingleCounterScreen() {
	return (
		<Header title={'Counter'} total={0}>
			<h1>single counter</h1>
		</Header>
	);
}

export default SingleCounterScreen;

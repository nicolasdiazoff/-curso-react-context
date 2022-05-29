import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

function ArchiveScreen() {
	return (
		<>
			<Header
				title={'Archives'}
				total={0}
				buttons={
					<>
						<Link to='/create'>start new</Link>
						<Link to='/'>see counters</Link>
					</>
				}
			/>
			<h2> list of archive</h2>
		</>
	);
}

export default ArchiveScreen;

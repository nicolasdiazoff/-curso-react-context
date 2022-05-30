import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

function CreateScreen() {
	return (
		<Header title={'New one'} total={0}>
			<Link to='/'>back to archives</Link>
		</Header>
	);
}

export default CreateScreen;

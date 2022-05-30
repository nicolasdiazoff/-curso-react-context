import React from 'react';
import { Link } from 'react-router-dom';

function CreateScreen() {
	return (
		<>
			<div>
				<h1>New One</h1>
				<nav
					style={{
						borderBottom: 'solid 1px',
						paddingBottom: '1rem',
					}}>
					<Link to='/'>Back</Link>
				</nav>
			</div>
		</>
	);
}

export default CreateScreen;

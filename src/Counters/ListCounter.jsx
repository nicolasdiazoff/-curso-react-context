import React from 'react';
import ItemCounter from './ItemCounter';

function ListCounter({ counters }) {
	return (
		<>
			{counters && counters.length <= 0 ? (
				<div className='NotFound'>
					<h1> You don't have counters yet</h1>
				</div>
			) : (
				<div className='ListCounter'>
					{counters.map((counter, index) => (
						<ItemCounter {...counter} id={index} />
					))}
				</div>
			)}
		</>
	);
}

export default ListCounter;

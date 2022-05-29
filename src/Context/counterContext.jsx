import React, { createContext, useMemo, useEffect, useReducer } from 'react';

export const CounterContext = createContext();

const initialState = { count: 0, counters: [] };
const countersExample = [
	{
		title: 'Contador de ejemplo',
		count: 0,
	},
];

function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			let counterIncrement = state.counters[action.id];
			counterIncrement = {
				...counterIncrement,
				count: counterIncrement.count + 1,
			};
			console.log('tetica');
			return { counters: state.counters, ...state };
		case 'decrement':
			console.log('tetica');
			return { counters: state.counters };
		case 'updateCounters':
			console.log('update');
			return { counters: action.counters };
		case 'delete':
			return { count: state.count - 1 };
		case 'create':
			return { count: state.count - 1 };
		default:
			throw new Error();
	}
}

export const CounterProvider = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		const localcounters = localStorage.getItem('localCounters');
		if (localcounters) {
			dispatch({
				type: 'updateCounters',
				counters: JSON.parse(localcounters),
			});
		} else {
			localStorage.setItem(
				'localCounters',
				JSON.stringify(countersExample)
			);
			dispatch({ type: 'updateCounters', counters: countersExample });
		}
	}, []);

	// const value = useMemo(() => {
	// 	return {
	// 		state,
	// 		dispatch,
	// 	};
	// });

	return <CounterContext.Provider value={{ state, dispatch }} {...props} />;
};

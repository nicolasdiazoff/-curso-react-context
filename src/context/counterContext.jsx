import React, { createContext, useEffect, useReducer } from 'react';

export const CounterContext = createContext();

const initialState = { count: 0, counters: [] };
const countersExample = [
	{
		title: 'Counter Example',
		count: 0,
	},
	{
		title: 'Counter Example 2',
		count: 0,
	},
	{
		title: 'Counter Example 3',
		count: 0,
	},
];

function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			let counterIncrement = state.counters[action.id];
			counterIncrement.count = counterIncrement.count + 1;
			return { counters: state.counters, ...state };
		case 'decrement':
			let counterDecrement = state.counters[action.id];
			counterDecrement.count = counterDecrement.count - 1;
			return { counters: state.counters, ...state };
		case 'delete':
			return { count: state.count - 1 };
		case 'create':
			return { count: state.count - 1 };
		case 'updateCounters':
			return { counters: action.counters };
		case 'deleteCounters':
			return { counters: [] };
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

	return <CounterContext.Provider value={{ state, dispatch }} {...props} />;
};

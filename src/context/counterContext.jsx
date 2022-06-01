import React, { createContext, useEffect, useReducer } from 'react';

export const CounterContext = createContext();

const initialState = {
	counters: [],
};

const countersExample = [
	{
		title: 'Counter Example',
		count: 0,
		archive: false,
	},
	{
		title: 'Counter Example 2',
		count: 0,
		archive: false,
	},
	{
		title: 'Counter Example 3',
		count: 0,
		archive: false,
	},
];

function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			let counterIncrement = state.counters[action.id];
			counterIncrement.count = counterIncrement.count + 1;
			localStorage.setItem(
				'localCounters',
				JSON.stringify(state.counters)
			);
			return { counters: state.counters, ...state };
		case 'decrement':
			let counterDecrement = state.counters[action.id];
			counterDecrement.count = counterDecrement.count - 1;
			localStorage.setItem(
				'localCounters',
				JSON.stringify(state.counters)
			);
			return { counters: state.counters, ...state };
		case 'create':
			state.counters.push({
				title: 'New counter exmaple',
				count: 0,
				archive: false,
			});
			localStorage.setItem(
				'localCounters',
				JSON.stringify(state.counters)
			);
			return {
				...state,
				counters: state.counters,
			};
		case 'reset':
			let counterRest = state.counters[action.id];
			counterRest.count = 0;
			localStorage.setItem(
				'localCounters',
				JSON.stringify(state.counters)
			);
			return { counters: state.counters, ...state };
		case 'archive':
			let counterArchive = state.counters[action.id];
			counterArchive.archive = true;
			localStorage.setItem(
				'localCounters',
				JSON.stringify(state.counters)
			);
			return { counters: state.counters, ...state };
		case 'unarchive':
			let counterUnArchive = state.counters[action.id];
			counterUnArchive.archive = false;
			localStorage.setItem(
				'localCounters',
				JSON.stringify(state.counters)
			);
			return { counters: state.counters, ...state };
		case 'updateCounters':
			return {
				...state,
				counters: action.counters,
				total: action.counters.length,
			};
		case 'deleteCounters':
			return {
				totalArchives: [],
				counters: [],
				...state,
			};
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

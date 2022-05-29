import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { CounterContext } from '../Context/counterContext';

function ItemCounter({ id, title, count }) {
	const { dispatch } = useContext(CounterContext);
	const classes = useStyles();
	return (
		<>
			<div className={classes.ItemCounter}>
				<div className={classes.ItemCounterInfo}>
					<h1>{count}</h1>
					<p>{title}</p>
				</div>
				<div className={classes.ItemCounterBox}>
					<button
						onClick={() => dispatch({ type: 'increment', id: id })}>
						+
					</button>
					<button
						onClick={() => dispatch({ type: 'decrement', id: id })}>
						-
					</button>
				</div>
			</div>
		</>
	);
}

const useStyles = createUseStyles({
	ItemCounter: {
		display: 'flex',
		flexDirection: 'row',
		alignContent: 'space-between',
		alignItems: 'center',
		width: '90%',
		margin: 'auto',
		boxSizing: 'border-box',
		padding: 20,
		borderRadius: 5,
		border: '1px solid #DADEFB',
	},
	ItemCounterInfo: {
		width: '100%',
		'& h1': {
			fontSize: '2.2rem',
			fontWeight: 800,
			margin: 0,
			color: '#000',
		},
		'& p': {
			fontSize: '1rem',
			fontWeight: 600,
			margin: 0,
			color: '#4f4f4f',
		},
	},
	ItemCounterBox: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		'& button': {
			backgroundColor: '#DADEFB',
			width: 50,
			height: 50,
			borderRadius: 50,
			border: 'none',
			color: '#000',
			outline: 'none',
			fontSize: '2rem',
			fontWeight: 600,
			margin: 0,
			marginLeft: 5,
			marginRight: 5,
		},
	},
});

export default ItemCounter;

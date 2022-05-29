import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header({ title, total, buttons }) {
	return (
		<div className='Header'>
			<div className='Header-counter'>
				<p>Total {total}</p>
			</div>
			<div className='Header-title'>
				<h1>{title}</h1>
			</div>
			<nav className='Header-box'>{buttons}</nav>
		</div>
	);
}

export default Header;

import React from 'react';
import {NavLink,Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<nav className='Navbar'>
			<ul className='Navbar-menu'>
				<div className='div'>
					<Link to='/asociaciones' className='Navbar-link'>Asociaciones</Link>
					<NavLink exact to='/marvel' activeClassName='active' className='Navbar-link'>Marvel</NavLink>
					<NavLink exact to='/dc' activeClassName='active' className='Navbar-link'>Dc</NavLink>
				</div>
			<div className='div'>
				<NavLink exact  to='/login' activeClassName='active'  className='Navbar-link'>Logout</NavLink>
			</div>
			</ul>
		</nav>
	);
};

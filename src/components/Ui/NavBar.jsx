import React,{useContext} from 'react';
import {NavLink,Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {
	const {user,dispatch} = useContext(AuthContext)
	const history = useHistory()
	
	const handleLogout = ()=>{
		history.replace('/login')
		dispatch({
			type:types.logout
    })

	}
	return (
		<nav className='Navbar'>
			<ul className='Navbar-menu'>
				<div className='div'>
					<Link to='/asociaciones' className='Navbar-link'>Asociaciones</Link>
					<NavLink exact to='/marvel' activeClassName='active' className='Navbar-link'>Marvel</NavLink>
					<NavLink exact to='/dc' activeClassName='active' className='Navbar-link'>Dc</NavLink>
					<NavLink exact to='/search' activeClassName='active' className='Navbar-link'>Search</NavLink>
				</div>
			<div className='div'>
				<p className='parrafo'>{user.name}</p>
				<button  className='Button-link' onClick={handleLogout}>Logout</button>
			</div>
			</ul>
		</nav>
	);
};

import { useContext } from 'react';
import { NavLink,useNavigate} from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {
let navigate = useNavigate();
	const { user, dispatch } = useContext(AuthContext);

	const handleLogout = () => {
		navigate('/login',{
			replace: true
		});
	};
	return (
		<nav className='Navbar'>
			<ul className='Navbar-menu'>
				<div className='div'>
					<p  
					className='Navbar-link'
					>
						Asociaciones
					</p>
					<NavLink
						to='/marvel'
						className={({isActive}) => isActive ? 'Navbar-link active' : 'Navbar-link'}
					>
						Marvel
					</NavLink>
					<NavLink
						to='/dc'
						className={({isActive}) => isActive ? 'Navbar-link active' : 'Navbar-link'}
					>
						Dc
					</NavLink>
					<NavLink
						to='/search'
						className={({isActive}) => isActive ? 'Navbar-link active' : 'Navbar-link'}
					>
						Search
					</NavLink>
				</div>
				<div className='div'>
					<p className='parrafo'>{user.name}</p>
					<button className='Button-link' onClick={handleLogout}>
						Logout
					</button>
				</div>
			</ul>
		</nav>
	);
};

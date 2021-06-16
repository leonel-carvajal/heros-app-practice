import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

const LoginScreen = ({ history }) => {
	const {dispatch} = useContext(AuthContext);
  const handleClick = () => {
		const lastPath = localStorage.getItem('LastPath') || '/'
    dispatch({
      type:types.login,
      payload:{
        name:'Leonel'
      }
    })
    history.replace(lastPath)
	};
	return (
		<div className='container'>
			<h1 className='container-title'>Login</h1>
			<hr />
			<button className='container-button' onClick={handleClick}>
				Login
			</button>
		</div>
	);
};

export default LoginScreen;

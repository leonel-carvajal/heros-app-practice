import {useNavigate} from 'react-router-dom';

const LoginScreen = () => {	
	let navigate = useNavigate();

  const handleLogin = () => {
		navigate('/marvel',{
			replace: true
		});
	}
	return (
		<div className='container'>
			<h1 className='container-title'>Login</h1>
			<hr />
			<button className='container-button' onClick={handleLogin}>
				Login
			</button>
		</div>
	);
};


export default LoginScreen;
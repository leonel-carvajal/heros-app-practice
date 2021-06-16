import React,{useContext} from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import LoginScreen from '../components/login/LoginScreen';
import DashBoardRoutes from './DashBoardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const AppRouter = () => {
	const {user} = useContext(AuthContext);
	return (
		<>
			<Router>
				<Switch>
					<PublicRoute 
					exact path='/login' 
					component={LoginScreen} 
					isAuthenticated={user.logged}
					/>
					<PrivateRoute  
					path='/' 
					component={DashBoardRoutes}  
					isAuthenticated={user.logged}/>
				</Switch>
			</Router>
		</>
	);
};

export default AppRouter;

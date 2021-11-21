import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import DashBoardRoutes from './DashBoardRoutes';
import LoginScreen from '../components/login/LoginScreen';
const AppRouter = () => {

	return (
			<Router>
				<Routes>
					<Route path="/" element={<LoginScreen />} />
					<Route path='/login' element={<LoginScreen/>}/>
					<Route path='/*' element={<DashBoardRoutes/>}/>
				</Routes>
			</Router>
	);
};

export default AppRouter;

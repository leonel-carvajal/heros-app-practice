import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Navbar } from '../components/Ui/NavBar';
import MarvelScreen from '../components/marvel/MarvelScreen';
import HeroesScreen from '../components/heroes/HeroesScreen';
import DcScreen from '../components/dc/DcScreen';

const DashBoardRoutes = () => {
	return (
		<>
			<Navbar />
			<div>
				<Switch>
					<Route exact path='/marvel' component={MarvelScreen} />
					<Route exact path='/hero/:heroId' component={HeroesScreen} />
					<Route exact path='/dc' component={DcScreen} />
					<Redirect to='/marvel' />
				</Switch>
			</div>
		</>
	);
};

export default DashBoardRoutes;

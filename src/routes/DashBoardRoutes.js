import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/Ui/NavBar';
import MarvelScreen from '../components/marvel/MarvelScreen';
import HeroesScreen from '../components/heroes/HeroesScreen';
import DcScreen from '../components/dc/DcScreen';
import SearchScreen from '../components/search/SearchScreen';

const DashBoardRoutes = () => {
	return (
		<>
			<Navbar/>
				<Routes>
					<Route path='marvel' element={<MarvelScreen/>}/>
					<Route path='hero/:heroId' element={<HeroesScreen/>}/>
					<Route path='dc' element={<DcScreen/>}/>
					<Route path='search' element={<SearchScreen/>}/>
				</Routes>
		</>
	);
};

export default DashBoardRoutes;

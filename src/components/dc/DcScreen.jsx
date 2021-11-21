import HeroesList from '../heroes/HeroesList';

const DcScreen = () => {
	return (
		<>
			<h2 className='title'>Dc Heroes</h2>
			<HeroesList publisher='DC Comics' />
		</>
	);
};

export default DcScreen;

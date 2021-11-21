import HeroesList from '../heroes/HeroesList';
const MarvelScreen = () => {
  return (
    <>
      <h2 className='title'>Marvel Heroes</h2>
      <HeroesList publisher='Marvel Comics'/>
    </>
  )
}

export default MarvelScreen;

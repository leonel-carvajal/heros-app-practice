import { useMemo } from 'react'
import {useParams,Navigate,useNavigate} from 'react-router-dom'
import { getHeroesById } from '../selectors/getHeroesById';

const HeroesScreen = () => {
  const navigate = useNavigate();
  const {heroId ,} = useParams();
  const hero = useMemo(()=>getHeroesById(heroId),[heroId])

  if(!hero){
    return <Navigate to="/dc"/>
  } 

  const {id,superhero,publisher,alter_ego,first_appearance,characters} = hero;

  const handleReturn =()=>{
    navigate(-1)
  }
  return (
    <>
    <div className='card-individual '>
    <img 
    src={`/assets/heroes/${id}.jpg`} 
    alt={superhero}  
    className='card-img-i animate__animated animate__fadeInLeft' />
    <div className="card-body-i">
    <p className='card-text-i'><b>Alter Ego:</b> {alter_ego}</p>
        <p className='card-text-i'> <b>Publisher:</b> {publisher}</p>
        <p className='card-text-i'><b>First appearance:</b> {first_appearance}</p>
        <p className='card-text-i'>  <b>Characters:</b>{characters}</p>
        <button className='button-i' onClick={handleReturn}>Return</button>
    </div>
    </div>
    </>
  )
}

export default HeroesScreen;

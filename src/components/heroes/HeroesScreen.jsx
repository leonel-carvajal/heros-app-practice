import React, { useMemo } from 'react'
import { Redirect, useParams} from 'react-router-dom'
import { getHeroesById } from '../selectors/getHeroesById';

const HeroesScreen = ({history}) => {
  const {heroId} = useParams();
  const hero = useMemo(()=>getHeroesById(heroId),[heroId])
  //const hero = getHeroesById(heroId)
  if(!hero){
    return <Redirect to='/'/>
  }
  const {id,superhero,publisher,alter_ego,first_appearance,characters} = hero
  const handleReturn =()=>{
    if(history.length<=2){
      history.push('/')
    }else{
      history.goBack()
    }
  }
  return (
    <>
    <div className='card-individual '>
    <img src={`./assets/heroes/${id}.jpg`} alt={superhero}  className='card-img-i animate__animated animate__fadeInLeft' />
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

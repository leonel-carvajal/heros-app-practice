import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../selectors/getHeroesById';

const HeroesScreen = () => {
  const {heroId} = useParams();
  const hero = getHeroesById(heroId)
  if(!hero){
    return <Redirect to='/'/>
  }
  const {id,superhero,publisher,alter_ego,first_appearance,characters} = hero

  return (
    <>
    <div className='card-individual'>
    <img src={`./assets/heroes/${id}.jpg`} alt={superhero}  className='card-img' />
    <div className="card-body-i">
    <p className='card-text-i'><b>Alter Ego:</b> {alter_ego}</p>
        <p className='card-text-i'> <b>Publisher:</b> {publisher}</p>
        {
          alter_ego!==characters &&<p>  <b>Characters:</b>{characters}</p>
        }
        <p className='card-text-i'><b>First appearance:</b> {first_appearance}</p>
    </div>
    </div>

    </>
  )
}

export default HeroesScreen;

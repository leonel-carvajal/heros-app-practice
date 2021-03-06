import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../selectors/getHeroesByPublisher';
import HeroCard from './HeroCard';

const HeroesList = ({publisher}) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher),[publisher])
  //const heroes = getHeroesByPublisher(publisher)
  return (
    <div className='container-card animate__animated animate__fadeIn'>
      {
        heroes.map(hero=>(
          <HeroCard 
          key={hero.id}
          {...hero}
          />
        ))
      }
    </div>
  )
}

export default HeroesList

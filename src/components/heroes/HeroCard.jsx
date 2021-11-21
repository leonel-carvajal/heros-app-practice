import {Link} from 'react-router-dom';

const HeroCard = ({id,superhero,publisher,alter_ego,first_appearance,characters}) => {
  const imgPath = `./assets/heroes/${id}.jpg`;
  
  return (
    <div className='card'>
        <img src={imgPath} alt={superhero} className='card-img' />
      <div className="card-body">
        <p className='card-text'>{alter_ego}</p>
        <p className='card-text'>{publisher}</p>
        {
          alter_ego!==characters &&<p>{characters}</p>
        }
        <p className='card-text'>{first_appearance}</p>
        <Link to={`/hero/${id}`} className='card-button'>Más...</Link>
      </div>
    </div>
  )
}

export default HeroCard;

import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import HeroCard from '../heroes/HeroCard';
import useForm from '../hooks/useForm';
import { getHeroesByname } from '../selectors/getHeroesByName';


const SearchScreen = ({history}) => {
  const location = useLocation()
  const {q=''} = queryString.parse(location.state)
  const [formValues,setFormValues] =useForm({
    searchText:q
  })
  const {searchText} = formValues;
  //const heroes = useMemo(() => getHeroesByPublisher(publisher),[publisher])
  const herosFiltered = useMemo(()=>getHeroesByname(searchText),[searchText])
  const handleSubmit = (e)=>{
      e.preventDefault()
      history.push(`?q=${searchText}`)
  }

  return (
    <div>
      <h2 className='title'>Search Screen</h2>
      <hr/>
      <div className="search">
        <form className='form' onSubmit={handleSubmit}>
          <input 
          className='input' 
          name='searchText' 
          onChange={setFormValues}
          type="text" 
          value={searchText} 
          autoComplete='off'
          placeholder='search hero'
          />
          <button type='submit' className='submit'>Search...</button>
        </form>
        <div className="result">
          <h2>Results</h2><hr/>
            { searchText!=='' && herosFiltered.length===0 && <div className='alert'>
              Ther is not a hero width {searchText}
            </div>}
          {
            herosFiltered.map(hero=>(
              <HeroCard 
              key={hero.id}
              {...hero}
              />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default SearchScreen

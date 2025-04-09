import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import queryString from 'query-string';
import { getHeroesByName } from '../helpers/getHeroesByName';
import { HeroCard } from '../components';

const initialValues = {
  searchText: ''
}

export const SearchPage = () => {
  //Obtener las navegacion
  const navigate = useNavigate();
  //Obtener la localizacion de donde nos encontramos html
  const location = useLocation();
  
  const {q = ''} = queryString.parse( location.search );
  const heroesName: string = (typeof q === 'string') ? q : '';
  const heroes = getHeroesByName(heroesName);

  //Div de mensajes de error
  const showSearch = (heroesName.length === 0);
  const showError = (heroesName.length > 0 ) && heroes.length === 0;
  
  console.log("ShowSearch: " + showSearch);
  console.log("ShowError:" + showError);

  initialValues.searchText = heroesName;
  const [values, setValues] = useState(initialValues);
  
  const onInputChange = (e:React.FormEvent<HTMLInputElement>)=>{
    const {name, value } = e.currentTarget;
    setValues({
      ...values,
      [name]: value
    });
  }

  const onSearchSubmit = (e: React.MouseEvent<HTMLElement>)=>{
    e.preventDefault();
    if( values.searchText.trim().length <= 1) return;
    navigate(`?q=${ values.searchText}`);
  }

  return (
    <>
      <h1> Search </h1>
      <hr/>

      <div className='row'>
        <div className='col-5'>
          <h4> Searching</h4>
          <hr/>
          <form>
            <input 
              type='text'
              placeholder='Search a hero'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={values.searchText}
              onChange={onInputChange}></input>

            <button className='btn btn-outline-primary mt-1'
            onClick={onSearchSubmit}>
              Search
            </button>
          </form>
        </div>
        <div className='col-7'>
          <h4> Results </h4>
          <hr/>
          {/* {
            (q === '' )  ? <div className='alert alert-primary'> Search a hero </div>
            : (heroes.length === 0 ) 
            && <div className='alert alert-danger'>No hero with <b> {q} </b></div>
          } */}
          <div className='alert alert-primary' style={{ display: showSearch ? '': 'none'}}>
              Search a hero
          </div>
          <div className='alert alert-danger' style={{ display: showError ? '': 'none'}}>
            No hero with <b> {heroesName} </b>
          </div>

          {
            heroes.map(hero =>
              <HeroCard key={hero.id} {...hero} />
            )
          }
        </div>
      </div>
    </>
  )
}

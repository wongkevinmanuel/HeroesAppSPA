import { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers';

export const HeroPage = () => {
  
  const { heroId } = useParams();
  const navigate = useNavigate();
  
  //useMemo()
  //Cuando se llama una funcion directamente se debe considerar
  //para rendimiento memorizar valores con useMemo
  //useMemo dispara un Callback cuando su dependencias cambian
  //const hero = heroId ? getHeroById(heroId) : null;
  const hero = useMemo( ()=> (heroId ?  getHeroById(heroId!) : null ) ,[heroId]);
  //  const hero = useMemo(() => (heroId ? getHeroById(heroId) : null), [heroId]);

  const onNavigateBack = () => {
    //Regresar pagina anterior
    navigate(-1);
  }

  if(!hero){
    return <Navigate to="/marvel"></Navigate>    
  }
  const heroImageUrl = `/src/assets/heroes/${ hero.id }.jpg`;

  //style={{ maxWidth: 250 +'px', marginTop: 10, margin: 5}}

  return (
    <div className='row mt-5 animate_animated animate_fadeInLeft'>
      <div className='col-4'>
        <img src={heroImageUrl} 
        alt={hero.superhero}
        className="img-thumbnail" >
        </img>
      </div>
      <div className='col-8'>
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter ego: </b> {hero.alter_ego }</li>
          <li className='list-group-item'><b>Publisher: </b> {hero.publisher}</li>
          <li className='list-group-item'><b>First appearance: </b> {hero.first_appearance}</li>
        </ul>

        <h5 className="mt-3"> Characters</h5>
        <p> {hero.characters} </p>
        <button className='btn btn-outline-info'
          onClick={ onNavigateBack}>
          Regresar 
        </button>
      </div>
    </div>

  )
}

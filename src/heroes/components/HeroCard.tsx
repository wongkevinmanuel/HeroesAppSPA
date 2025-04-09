import { Link } from 'react-router-dom';

//Funcion que retorna un jsx condicionalmente --- + facil de leer
interface CharactersByHeroProps{
    alter_ego:string;
    characters:string
}
const CharactersByHero = ({alter_ego,characters}: CharactersByHeroProps)=>{
    if(alter_ego === characters) return (<></>);
    
    return <p>{characters}</p>;
}

interface HeroCardProps{
    'id': string;
    'superhero': string;
    'publisher': string;
    'alter_ego': string;
    'first_appearance': string;
    'characters': string;
}

export const HeroCard = (heroe:HeroCardProps) => {
    const heroImageUrl = `src/assets/heroes/${heroe.id}.jpg`;
    //Crear jsx para mejor presentacion
    //const charactersByHero = (<p>{heroe.characters}</p>);

    return (
    <div className="card text-white animate__animated animate__fadeIn" style={{ maxWidth: 250 +'px', marginTop: 10, margin: 5}} key={heroe.id}>
      <img src={heroImageUrl} className="card-img" alt={heroe.superhero} />
      <div className="card-img-overlay">
      <h5 className="card-title">{heroe.superhero}</h5>
      <p className="card-text">{heroe.alter_ego}</p>
        {
            //(heroe.alter_ego !== heroe.characters) && (<p> {heroe.characters} </p>)
            //(heroe.alter_ego !== heroe.characters) && charactersByHero
        }
        <CharactersByHero alter_ego={heroe.alter_ego} characters={heroe.characters}>
        </CharactersByHero>

      <p className="card-text">
        <small className='text-muted'>
        {heroe.first_appearance}
        </small>
      </p>

      <Link to={`/hero/${heroe.id}`}> Mas.. </Link>
    </div>
  </div>
  )
}

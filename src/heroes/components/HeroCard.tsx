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
    const heroImageUrl = `https://res.cloudinary.com/dgeig1ohh/image/upload/v1744314115/heroes/${heroe.id}.jpg`;
    //const heroImageUrl = `src/assets/heroes/${heroe.id}.jpg`;
    //Crear jsx para mejor presentacion
    //const charactersByHero = (<p>{heroe.characters}</p>);

    return (
    /* className="col" style={{ marginRight:3, marginLeft:3, padding:12 }}   */
    <div className="col" style={{ padding: 10 }}   key={heroe.id}>
      <div className='card'>
        <div className="box">
            <div className='card-img'
            style={{backgroundImage:`url(${heroImageUrl})`}}>

            </div>
            <div className='card-body'>
                <div className='kevin-color'>
                  <h5 className="card-title">{heroe.superhero}</h5>
                  <p className="card-text">{heroe.alter_ego}</p>
                    {
                        //(heroe.alter_ego !== heroe.characters) && (<p> {heroe.characters} </p>)
                        //(heroe.alter_ego !== heroe.characters) && charactersByHero
                    }
                    <CharactersByHero alter_ego={heroe.alter_ego} characters={heroe.characters}>
                    </CharactersByHero>
                  
                  <p className="card-text">
                      {heroe.first_appearance}
                  </p>
                  <Link to={`/hero/${heroe.id}`}> Mas.. </Link>
                </div>
            </div>
        </div>
      </div>
      
{/*       <img src={heroImageUrl} className="card-img" alt={heroe.superhero} />
 */}      

    </div>
  )
}

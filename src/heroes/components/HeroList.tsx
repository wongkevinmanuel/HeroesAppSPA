import { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import { HeroCard } from './';

interface HeroListProps{
    publisher: string;
}
export const HeroList = ({publisher} : HeroListProps) => {
    //const heroes = getHeroesByPublisher(publisher);
    //Obtener resultados de getHeroesByPublisher
    //const heroes = useMemo( () => getHeroesByPublisher(publisher), [ publisher ] );
    //kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
  const heroes = useMemo( ()=> getHeroesByPublisher(publisher), [ publisher ] );

  return (
    <div className="row rows-cols-1 rows-cols-md-3 g-4">
        {
            heroes.map(heroe => ( 
                <HeroCard key={heroe.id} 
                        {...heroe}>
                </HeroCard>
            ))
        }
    </div>
  )
}

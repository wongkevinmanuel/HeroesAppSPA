import { heroes } from '../data/heroes';

export const getHeroesByPublisher = ( publisher: string) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];
    if(!validPublishers.includes(publisher)){
        throw new Error(`Publisher "${publisher}" is not a valid`);
    }

    return heroes.filter( heroe => heroe.publisher === publisher);
}
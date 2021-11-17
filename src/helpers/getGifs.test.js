import { getGifs } from "./getGifs"

describe('Pruebas con getGifs Fetch', () => {
    
    test('Debe de traer 10 elemento',async () => {
        const gifs = await getGifs('Jonas Brothers');
        expect(gifs.length).toBe(10);
        
    })
    
    test('Debe de traer 10 elemento',async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
        
    })
})

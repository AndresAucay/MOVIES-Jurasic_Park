import axios from 'axios';

const BASE_URL = 'http://10.0.1.133:8081'; 


export const deleteMovie = async (movieId: number): Promise<void> => {
    try {
        await axios.delete(`${BASE_URL}/movies/delete/${movieId}`);
    } catch (error) {
        console.error('Error eliminando película:', error);
        throw new Error('No se pudo eliminar la película');
    }
};


export const deleteScene = async (sceneId: number): Promise<void> => {
    try {
        await axios.delete(`${BASE_URL}/scenes/delete/${sceneId}`);
    } catch (error) {
        console.error('Error eliminando escena:', error);
        throw new Error('No se pudo eliminar la escena');
    }
};


export const deleteCharacter = async (characterId: number): Promise<void> => {
    try {
        await axios.delete(`${BASE_URL}/characters/delete/${characterId}`);
    } catch (error) {
        console.error('Error eliminando personaje:', error);
        throw new Error('No se pudo eliminar el personaje');
    }
};

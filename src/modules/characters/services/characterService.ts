import type { ApiResponse, Character } from '../types';

const BASE_URL = 'https://rickandmortyapi.com/api';

/**
 * Servicio encargado de la comunicación con la API de Rick & Morty.
 * Usamos fetch nativo para evitar dependencias innecesarias y demostrar 
 * conocimiento de las Web APIs modernas.
 */
export const characterService = {
  /**
   * Obtiene una lista paginada de personajes.
   * @param page número de página a solicitar
   */
  async getCharacters(page: number = 1): Promise<ApiResponse<Character>> {
    const response = await fetch(`${BASE_URL}/character?page=${page}`);
    
    if (!response.ok) {
      throw new Error('Error al obtener los personajes');
    }
    
    return await response.json();
  },

  /**
   * Obtiene un personaje por su ID.
   * @param id ID del personaje
   */
  async getCharacterById(id: number): Promise<Character> {
    const response = await fetch(`${BASE_URL}/character/${id}`);
    
    if (!response.ok) {
      throw new Error(`Error al obtener el personaje con ID ${id}`);
    }
    
    return await response.json();
  }
};

import type { ApiResponse, Character } from '../types';

const BASE_URL = 'https://rickandmortyapi.com/api';
const CHARACTER_COUNT = 826; // Total number of characters in the API

/**
 * Servicio encargado de la comunicación con la API de Rick & Morty.
 * Usamos fetch nativo para evitar dependencias innecesarias y demostrar 
 * conocimiento de las Web APIs modernas.
 */
export const characterService = {
  /**
   * Obtiene una lista de personajes aleatorios.
   * @param count El número de personajes aleatorios a obtener
   */
  async getRandomCharacters(count: number = 20): Promise<Character[]> {
    const randomIds = Array.from(
      { length: count }, 
      () => Math.floor(Math.random() * CHARACTER_COUNT) + 1
    );
    
    // Remove duplicates
    const uniqueIds = [...new Set(randomIds)];

    const response = await fetch(`${BASE_URL}/character/[${uniqueIds.join(',')}]`);
    
    if (!response.ok) {
      throw new Error('Error fetching random characters');
    }
    
    const data = await response.json();
    // The API returns a single object if only one ID is requested
    return Array.isArray(data) ? data : [data];
  },

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

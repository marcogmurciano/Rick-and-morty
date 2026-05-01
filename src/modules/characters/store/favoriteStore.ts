import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Character } from '../../types';

/**
 * Store global para gestionar los personajes favoritos.
 * Usamos el patrón "Setup Store" (como un composable) que es el estándar de Pinia.
 */
export const useFavoriteStore = defineStore('favorites', () => {
  const favorites = ref<Character[]>([]);

  // Getters (computed)
  const count = computed(() => favorites.value.length);
  
  const isFavorite = (id: number) => {
    return favorites.value.some(char => char.id === id);
  };

  // Actions
  const toggleFavorite = (character: Character) => {
    const index = favorites.value.findIndex(char => char.id === character.id);
    
    if (index > -1) {
      favorites.value.splice(index, 1);
    } else {
      favorites.value.push(character);
    }
    
    // Persistencia básica en localStorage para el "plus" senior
    localStorage.setItem('rm-favorites', JSON.stringify(favorites.value));
  };

  const loadFavorites = () => {
    const stored = localStorage.getItem('rm-favorites');
    if (stored) {
      favorites.value = JSON.parse(stored);
    }
  };

  return {
    favorites,
    count,
    isFavorite,
    toggleFavorite,
    loadFavorites
  };
});

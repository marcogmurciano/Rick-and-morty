import { ref, onMounted } from 'vue';
import type { Character } from '../../../types';
import { characterService } from '../services/characterService';

/**
 * Composable que encapsula la lógica de obtención de personajes.
 * Esto permite que cualquier componente pueda acceder a los personajes
 * sin conocer los detalles de la implementación del servicio.
 */
export function useCharacters() {
  const characters = ref<Character[]>([]);
  const isLoading = ref(true);
  const error = ref<string | null>(null);

  const fetchCharacters = async () => {
    if (isLoading.value) return; // Prevent re-fetching
    isLoading.value = true;
    error.value = null;

    try {
      // Fetch 20 random characters
      const results = await characterService.getRandomCharacters(40);
      characters.value = results;
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Unknown error';
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(() => {
    isLoading.value = false; // Reset from SSR if applicable
    fetchCharacters();
  });

  return {
    // State
    characters,
    isLoading,
    error,
    
    // Actions
    fetchCharacters,
  };
}

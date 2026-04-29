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
  const isLoading = ref(false);
  const error = ref<string | null>(null);
  const currentPage = ref(1);
  const totalPages = ref(0);

  const fetchCharacters = async (page: number = 1) => {
    isLoading.value = true;
    error.value = null;

    try {
      const { results, info } = await characterService.getCharacters(page);
      characters.value = results;
      totalPages.value = info.pages;
      currentPage.value = page;
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Error desconocido';
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(() => {
    fetchCharacters();
  });

  return {
    // State
    characters,
    isLoading,
    error,
    currentPage,
    totalPages,

    // Actions
    fetchCharacters,
  };
}

<script setup lang="ts">
import { ref } from 'vue';
import { useCharacters } from '../composables/useCharacters';
import CharacterCard from '../components/CharacterCard.vue';
import FavoritesSlideover from '../components/FavoritesSlideover.vue';
import { useFavoriteStore } from '../store/favoriteStore';

const { characters, isLoading, error, fetchCharacters } = useCharacters();
const favoriteStore = useFavoriteStore();
const isSlideoverOpen = ref(false);

// Load favorites from localStorage when the app starts
favoriteStore.loadFavorites();
</script>

<template>
  <div class="characters-view">
    <header>
      <h1>Rick & Morty Characters</h1>
      <div class="header-actions">
        <button @click="fetchCharacters" :disabled="isLoading" class="action-btn">
          {{ isLoading ? 'Loading...' : 'Get New Characters' }}
        </button>
        <button @click="isSlideoverOpen = true" class="action-btn fav-btn">
          Favorites ({{ favoriteStore.count }})
        </button>
      </div>
    </header>

    <div v-if="isLoading && characters.length === 0" class="loading">
      <p>Loading characters...</p>
    </div>

    <div v-else-if="error" class="error">
      <p>{{ error }}</p>
    </div>

    <div v-else class="character-grid">
      <CharacterCard 
        v-for="character in characters" 
        :key="character.id" 
        :character="character"
      />
    </div>

    <FavoritesSlideover :is-open="isSlideoverOpen" @close="isSlideoverOpen = false" />
  </div>
</template>

<style scoped>
.characters-view {
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
}

header {
  margin-bottom: 2rem;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  color: #f5f5f5;
  margin-bottom: 1rem;
}

.header-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.action-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  background-color: #55cc44;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
}

.action-btn:hover:not(:disabled) {
  background-color: #4ab33a;
}

.action-btn:disabled {
  background-color: #9e9e9e;
  cursor: not-allowed;
}

.action-btn.fav-btn {
  background-color: #ff9800;
}
.action-btn.fav-btn:hover {
  background-color: #e68900;
}

.character-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.loading, .error {
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: #f5f5f5;
}

.error {
  color: #d63d2e;
}
</style>

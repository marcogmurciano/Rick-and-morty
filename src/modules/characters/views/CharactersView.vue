<script setup lang="ts">
import { useCharacters } from '../composables/useCharacters';
import CharacterCard from '../components/CharacterCard.vue';

const { characters, isLoading, error } = useCharacters();
</script>

<template>
  <div class="characters-view">
    <header>
      <h1>Rick & Morty Characters</h1>
    </header>

    <div v-if="isLoading" class="loading">
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
  </div>
</template>

<style scoped>
.characters-view {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

header {
  margin-bottom: 2rem;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  color: #272b33;
}

.character-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.loading, .error {
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
}

.error {
  color: #d63d2e;
}

@media (max-width: 600px) {
  .character-grid {
    grid-template-columns: 1fr;
  }
}
</style>

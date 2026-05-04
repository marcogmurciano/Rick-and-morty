<script setup lang="ts">
import type { Character } from '../../../types';
import { useFavoriteStore } from '../store/favoriteStore';

const props = defineProps<{
  character: Character;
}>();

const favoriteStore = useFavoriteStore();
</script>

<template>
  <div class="character-card">
    <div class="image-container">
      <img :src="character.image" :alt="character.name" loading="lazy" />
      <button 
        @click="favoriteStore.toggleFavorite(character)"
        :class="['fav-btn', { 'is-fav': favoriteStore.isFavorite(character.id) }]"
        aria-label="Toggle favorite"
      >
        ★
      </button>
    </div>
    <div class="character-info">
      <h3>{{ character.name }}</h3>
      <p :class="['status', character.status.toLowerCase()]">
        <span class="status-dot"></span>
        {{ character.status }} - {{ character.species }}
      </p>
      <div class="section">
        <span class="label">Last known location:</span>
        <p>{{ character.location.name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.character-card {
  background: #3c3e44;
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  color: white;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  width: 280px; /* Smaller width */
}

.character-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
}

.image-container {
  position: relative;
  height: 220px; /* Reduced height */
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fav-btn {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  backdrop-filter: blur(4px);
}

.fav-btn:hover {
  transform: scale(1.1);
  background: rgba(0, 0, 0, 0.7);
}

.fav-btn.is-fav {
  color: #ff9800;
  background: rgba(0, 0, 0, 0.7);
}

.character-info {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

h3 {
  margin: 0;
  font-size: 1.5rem;
}

.status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: capitalize;
  font-size: 0.9rem;
  font-weight: 500;
}

.status-dot {
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%;
  background: #9e9e9e;
}

.alive .status-dot { background: #55cc44; }
.dead .status-dot { background: #d63d2e; }

.section {
  margin-top: 0.5rem;
}

.label {
  color: #9e9e9e;
  font-size: 0.8rem;
  font-weight: 500;
}

p {
  margin: 0;
}
</style>

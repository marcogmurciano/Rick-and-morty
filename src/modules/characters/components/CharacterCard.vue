<script setup lang="ts">
import type { Character } from '../../types';

defineProps<{
  character: Character;
}>();
</script>

<template>
  <div class="character-card">
    <img :src="character.image" :alt="character.name" loading="lazy" />
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
  transition: transform 0.2s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.character-card:hover {
  transform: translateY(-4px);
}

img {
  width: 100%;
  height: 250px;
  object-fit: cover;
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

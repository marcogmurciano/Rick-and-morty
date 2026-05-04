<script setup lang="ts">
import { useFavoriteStore } from '../store/favoriteStore';
import CharacterCard from './CharacterCard.vue';

const favoriteStore = useFavoriteStore();

defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits(['close']);
</script>

<template>
  <div
    :class="['slideover-backdrop', { 'is-open': isOpen }]"
    @click="$emit('close')"
  ></div>
  <aside :class="['slideover-panel', { 'is-open': isOpen }]">
    <header class="panel-header">
      <h2>Your Favorites ({{ favoriteStore.count }})</h2>
      <button @click="$emit('close')" class="close-btn" aria-label="Close panel">
        &times;
      </button>
    </header>
    <div class="panel-content">
      <p v-if="favoriteStore.count === 0" class="empty-state">
        You haven't added any favorites yet. Click the star on any character!
      </p>
      <div v-else class="favorites-grid">
        <CharacterCard
          v-for="character in favoriteStore.favorites"
          :key="`fav-${character.id}`"
          :character="character"
        />
      </div>
    </div>
  </aside>
</template>

<style scoped>
.slideover-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 99;
}
.slideover-backdrop.is-open {
  opacity: 1;
  visibility: visible;
}

.slideover-panel {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 480px;
  height: 100%;
  background: #242424;
  box-shadow: -10px 0 20px rgba(0, 0, 0, 0.2);
  transform: translateX(100%);
  transition: transform 0.3s ease;
  z-index: 100;
  display: flex;
  flex-direction: column;
}
.slideover-panel.is-open {
  transform: translateX(0);
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #3c3e44;
}
.panel-header h2 {
  margin: 0;
  font-size: 1.25rem;
}
.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
}

.panel-content {
  flex-grow: 1;
  overflow-y: auto;
  padding: 1.5rem;
}

.empty-state {
  text-align: center;
  color: #9e9e9e;
  padding-top: 2rem;
}

.favorites-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}
</style>

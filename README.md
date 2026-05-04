# Rick and Morty Character Viewer

<div align="center">

[![Vue](https://img.shields.io/badge/Vue-3.5-42b883?style=flat&logo=vue.js)](https://vuejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178c6?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=flat&logo=vite)](https://vitejs.dev)
[![Pinia](https://img.shields.io/badge/Pinia-3.0-ffd859?style=flat)](https://pinia.vuejs.org)

**Learning project to practice and strengthen Vue.js 3 knowledge**

</div>

---

## Table of Contents

- [Description](#description)
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Vue Concepts Applied](#vue-concepts-applied)
- [How to Run the Project](#how-to-run-the-project)
- [API Used](#api-used)

---

## Description

This project is a **character card viewer** for the popular animated series "Rick and Morty". It was developed for educational purposes to practice and consolidate knowledge of the Vue.js ecosystem.

The application consumes the [Rick and Morty API](https://rickandmortyapi.com/) to fetch character information and displays it in an attractive visual interface with favorite support.

---

## Demo

```
+----------------------------------------------------------+
|  Rick & Morty Characters                                 |
+----------------------------------------------------------+
|                                                          |
|  +------------------+  +------------------+              |
|  | [Image]       ★  |  | [Image]       ★  |              |
|  |                  |  |                  |              |
|  | Rick Sanchez     |  | Morty Smith      |              |
|  | ● Alive - Human  |  | ● Alive - Human  |              |
|  |                  |  |                  |              |
|  | Earth (C-137)   |  | Earth (C-137)    |              |
|  +------------------+  +------------------+              |
|                                                          |
+----------------------------------------------------------+
```

---

## Features

- **Character List**: Displays all characters from the series fetched from the API
- **Interactive Cards**: Visual design with relevant information for each character
- **Favorites System**: Allows marking characters as favorites
- **Data Persistence**: Favorites are stored in localStorage
- **Status Indicator**: Visually shows if the character is alive, dead, or unknown
- **Responsive Design**: Adapts to different screen sizes
- **Loading States**: Handles loading and error states

---

## Technologies Used

| Technology | Version | Purpose |
|------------|---------|---------|
| **Vue.js** | 3.5 | Main framework (Composition API) |
| **TypeScript** | 6.0 | Static typing |
| **Vite** | 8.0 | Build tool and development server |
| **Pinia** | 3.0 | Global state management |
| **Rick and Morty API** | - | Data source |

### Dev Dependencies

- `@vitejs/plugin-vue` - Vite plugin for Vue
- `@vue/tsconfig` - TypeScript configuration for Vue
- `vue-tsc` - TypeScript checker for Vue files

---

## Project Structure

```
src/
├── App.vue                    # Root component of the application
├── main.ts                    # Application entry point
├── style.css                  # Global styles
├── modules/
│   └── characters/            # Characters module
│       ├── components/
│       │   └── CharacterCard.vue    # Card component
│       ├── composables/
│       │   └── useCharacters.ts     # Reusable logic
│       ├── services/
│       │   └── characterService.ts  # API communication
│       ├── store/
│       │   └── favoriteStore.ts     # Favorites state (Pinia)
│       ├── types/
│       │   └── index.ts             # TypeScript types
│       └── views/
│           └── CharactersView.vue   # Main view
└── types/
    └── index.ts                     # Shared types
```

---

## Vue Concepts Applied

This project implements several fundamental Vue.js 3 concepts:

### Composition API
The project exclusively uses the **Composition API** with `<script setup>` syntax, which is the modern approach recommended by the Vue team.

```vue
<script setup lang="ts">
import { ref, computed } from 'vue';
const count = ref(0);
const double = computed(() => count.value * 2);
</script>
```

### TypeScript Typing
The entire project is written in TypeScript, leveraging the type system for greater robustness and a better development experience.

### Composables
The logic for fetching characters is encapsulated in a reusable **composable** (`useCharacters.ts`). Composables are Vue 3's way of creating reusable logic.

```typescript
export function useCharacters() {
  const characters = ref<Character[]>([]);
  // ... encapsulated logic
  return { characters, isLoading, error, fetchCharacters };
}
```

### Pinia (State Management)
**Pinia** is used as the global state store to manage favorite characters. The project implements the "Setup Store" pattern, which resembles writing composables.

### Props and Events
The `CharacterCard.vue` component receives data via **props** (`defineProps`) and communicates with the store via actions.

### Computed Properties
**Computed properties** are used to derive state (like checking if a character is a favorite).

### Scoped Styles
Each component's styles are **scoped** to avoid CSS collisions.

---

## How to Run the Project

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn**

### Steps

1. **Clone the repository**

```bash
git clone git@github.com:marcogmurciano/Rick-and-morty.git
cd Rick-and-morty
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open in browser**

Visit `http://localhost:5173` (port may vary)

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the project for production |
| `npm run preview` | Previews the production build |

---

## API Used

### Rick and Morty API

- **Main endpoint**: `https://rickandmortyapi.com/api/character`
- **Documentation**: [https://rickandmortyapi.com/documentation](https://rickandmortyapi.com/documentation)

The API provides:
- Paginated list of characters
- Detailed information for each character (name, status, species, location, image, etc.)

### Character Data

```typescript
interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
```

---

<div align="center">

**Built with ❤️ and Vue.js**

</div>
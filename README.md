# Rick and Morty Character Viewer

<div align="center">

[![Vue](https://img.shields.io/badge/Vue-3.5-42b883?style=flat&logo=vue.js)](https://vuejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178c6?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=flat&logo=vite)](https://vitejs.dev)
[![Pinia](https://img.shields.io/badge/Pinia-3.0-ffd859?style=flat)](https://pinia.vuejs.org)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**Proyecto de aprendizaje para practicar y afianzar conocimientos de Vue.js 3**

</div>

---

## Tabla de Contenidos

- [Descripción](#descripción)
- [Demo](#demo)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Conceptos de Vue Aplicados](#conceptos-de-vue-aplicados)
- [Cómo Ejecutar el Proyecto](#cómo-ejecutar-el-proyecto)
- [API Utilizada](#api-utilizada)
- [Posibles Mejoras](#posibles-mejoras)
- [Licencia](#licencia)

---

## Descripción

Este proyecto es un **visualizador de tarjetas de personajes** de la popular serie de animación "Rick and Morty". Fue desarrollado con fines didácticos para practicar y consolidar conocimientos del ecosistema Vue.js.

La aplicación consume la [Rick and Morty API](https://rickandmortyapi.com/) para obtener información de los personajes y mostrarlos en una interfaz visual atractiva con soporte para marcar favoritos.

---

## Demo

```
+----------------------------------------------------------+
|  Rick & Morty Characters                                 |
+----------------------------------------------------------+
|                                                          |
|  +------------------+  +------------------+              |
|  | [Imagen]      ★  |  | [Imagen]      ★  |              |
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

## Características

- **Listado de Personajes**: Muestra todos los personajes de la serie obtenidos de la API
- **Tarjetas Interactivas**: Diseño visual con información relevante de cada personaje
- **Sistema de Favoritos**: Permite marcar personajes como favoritos
- **Persistencia de Datos**: Los favoritos se guardan en localStorage
- **Indicador de Estado**: Muestra visualmente si el personaje está vivo, muerto o desconocido
- **Diseño Responsivo**: Se adapta a diferentes tamaños de pantalla
- **Loading States**: Manejo de estados de carga y errores

---

## Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Vue.js** | 3.5 | Framework principal (Composition API) |
| **TypeScript** | 6.0 | Tipado estático |
| **Vite** | 8.0 | Herramienta de build y desarrollo |
| **Pinia** | 3.0 | Gestión de estado global |
| **Rick and Morty API** | - | Fuente de datos |

### Dependencias de desarrollo

- `@vitejs/plugin-vue` - Plugin de Vite para Vue
- `@vue/tsconfig` - Configuración de TypeScript para Vue
- `vue-tsc` - TypeScript checker para archivos Vue

---

## Estructura del Proyecto

```
src/
├── App.vue                    # Componente raíz de la aplicación
├── main.ts                    # Punto de entrada de la app
├── style.css                  # Estilos globales
├── modules/
│   └── characters/            # Módulo de personajes
│       ├── components/
│       │   └── CharacterCard.vue    # Componente de tarjeta
│       ├── composables/
│       │   └── useCharacters.ts     # Lógica reutilizable
│       ├── services/
│       │   └── characterService.ts  # Comunicación con API
│       ├── store/
│       │   └── favoriteStore.ts     # Estado de favoritos (Pinia)
│       ├── types/
│       │   └── index.ts             # Tipos TypeScript
│       └── views/
│           └── CharactersView.vue   # Vista principal
└── types/
    └── index.ts                     # Tipos compartidos
```

---

## Conceptos de Vue Aplicados

Este proyecto implementa diversos conceptos fundamentales de Vue.js 3:

### Composition API
El proyecto utiliza exclusivamente la **Composition API** con la sintaxis `<script setup>`, que es el enfoque moderno y recomendado por el equipo de Vue.

```vue
<script setup lang="ts">
import { ref, computed } from 'vue';
const count = ref(0);
const double = computed(() => count.value * 2);
</script>
```

### Tipos con TypeScript
Todo el proyecto está escrito en TypeScript, aprovechando el sistema de tipos para mayor robustez y mejor experiencia de desarrollo.

### Composables (Composables Functions)
La lógica de obtención de personajes está encapsulada en un **composable** reusable (`useCharacters.ts`). Los composables son la forma de lógica reutilizable en Vue 3.

```typescript
export function useCharacters() {
  const characters = ref<Character[]>([]);
  // ... lógica encapsulada
  return { characters, isLoading, error, fetchCharacters };
}
```

### Pinia (Gestión de Estado)
Se utiliza **Pinia** como store de estado global para gestionar los personajes favoritos. El proyecto implementa el patrón de "Setup Store", que se asemeja a la escritura de composables.

### Props y Eventos
El componente `CharacterCard.vue` recibe datos mediante **props** (`defineProps`) y communicate con el store mediante acciones.

### Computed Properties
Se utilizan **computed properties** para derivar estado (como verificar si un personaje es favorito).

### Estilos scoped
Los estilos de cada componente están **scoped** para evitar colisiones de CSS.

---

## Cómo Ejecutar el Proyecto

### Prerrequisitos

- **Node.js** (versión 18 o superior)
- **npm** o **yarn**

### Pasos

1. **Clonar el repositorio**

```bash
git clone git@github.com:marcogmurciano/Rick-and-morty.git
cd Rick-and-morty
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Iniciar el servidor de desarrollo**

```bash
npm run dev
```

4. **Abrir en navegador**

Visitar `http://localhost:5173` (el puerto puede variar)

### Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Compila el proyecto para producción |
| `npm run preview` | Pre-visualiza la versión de producción |

---

## API Utilizada

### Rick and Morty API

- **Endpoint principal**: `https://rickandmortyapi.com/api/character`
- **Documentación**: [https://rickandmortyapi.com/documentation](https://rickandmortyapi.com/documentation)

La API proporciona:
- Lista paginada de personajes
- Información detallada de cada personaje (nombre, estado, especie, ubicación, imagen, etc.)

### Datos del Personaje

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

## Posibles Mejoras

Si deseas continuar desarrollando este proyecto, aquí hay algunas ideas:

- [ ] **Paginación**: Añadir botones para navegar entre páginas de personajes
- [ ] **Búsqueda**: Implementar filtro por nombre de personaje
- [ ] **Filtros**: Filtrar por estado (Alive/Dead), especie, género
- [ ] **Detalle Modal**: Al hacer click en una tarjeta, mostrar más información en un modal
- [ ] **Tests Unitarios**: Añadir tests con Vitest para los composables y componentes
- [ ] **Transiciones**: Añadir animaciones con Vue Transition
- [ ] **Dark/Light Mode**: Implementar modo oscuro/claro
- [ ] **Rickroll**: Hacer un easter egg divertido

---

## Licencia

Este proyecto está bajo la licencia **MIT**. Puedes usarlo, modificarlo y distribuirlo libremente.

---

## Recursos de Aprendizaje

Si estás aprendiendo Vue, estos recursos pueden ayudarte:

- [Documentación oficial de Vue 3](https://vuejs.org/guide/)
- [Vue School](https://vueschool.io/)
- [Pinia: La store oficial de Vue](https://pinia.vuejs.org/)
- [Vue Mastery](https://www.vuemastery.com/)

---

<div align="center">

**Construido con ❤️ y Vue.js**

</div>
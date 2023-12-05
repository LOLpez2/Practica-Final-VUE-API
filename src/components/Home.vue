<template>
  <div>
    <h1>RICKY MARTIN DATABASE :D</h1>
    <h2>Busca un personaje</h2>
    <div>
      <input v-model="searchTerm" type="text" placeholder="Buscar personajes">
      <button @click="searchCharacters">Buscar</button>
    </div>
    <div v-if="searchResults.length > 0">
      <h2>Resultados de la búsqueda:</h2>
      <div class="character-card" v-for="result in searchResults" :key="result.id" @click="showCharacterDetails(result)">
        <img :src="result.image" :alt="result.name" class="character-image">
        <p>{{ result.name }}</p>
      </div>
    </div>
    <modal v-if="selectedCharacter" @click="selectedCharacter = null">
      <h2>{{ selectedCharacter.name }}</h2>
      <img :src="selectedCharacter.image" :alt="selectedCharacter.name" class="character-image">
      <p>Status: {{ selectedCharacter.status }}</p>
      <p>Species: {{ selectedCharacter.species }}</p>
      <!-- Otros detalles del personaje -->
    </modal>
  </div>
</template>

<script>
import apiService from '/src/services/apiService';

export default {
  data() {
    return {
      searchTerm: '',
      searchResults: [],
      selectedCharacter: null,
    };
  },
  methods: {
    searchCharacters() {
      apiService.getCharacters()
        .then(response => {
          const characters = response.data.results;
          this.searchResults = characters.filter(character =>
            character.name.toLowerCase().includes(this.searchTerm.toLowerCase())
          );
        })
        .catch(error => {
          console.error('Error fetching characters:', error);
        });
    },
    showCharacterDetails(character) {
      this.selectedCharacter = character;
    },
  },
};
</script>

<style scoped>
/* Estilos para Home.vue */
div {
  text-align: center;
  padding: 20px;
}

h1 {
  color: #333;
}

input {
  padding: 8px;
  margin-right: 5px;
}

button {
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

h2 {
  margin-top: 20px;
  color: black;
}

.character-card {
  display: inline-block;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  color: black;
}

.character-image {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}
</style>

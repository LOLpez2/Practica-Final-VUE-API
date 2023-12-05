<template>
  <div>
    <h1>Lista de Personajes</h1>
    <ul>
      <li v-for="character in characters" :key="character.id">
        <router-link :to="{ name: 'CharacterDetail', params: { id: character.id }}">
          {{ character.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import apiService from '@/services/apiService';

export default {
  data() {
    return {
      characters: [],
    };
  },
  mounted() {
    apiService.getCharacters()
      .then(response => {
        this.characters = response.data.results;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  },
};
</script>

<style scoped>
div {
    text-align: center;
    padding: 20px;
  }

  h1 {
    color: #333;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 10px;
  }

  router-link {
    color: #1E88E5;
    text-decoration: none;
    font-weight: bold;
  }

  router-link:hover {
    text-decoration: underline;
  }
</style>

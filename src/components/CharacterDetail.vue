<template>
  <div>
    <h1>Detalles del Personaje</h1>
    <div v-if="character">
      <h2>{{ character.name }}</h2>
      <img :src="character.image" :alt="character.name" />
      <p>Status: {{ character.status }}</p>
      <p>Species: {{ character.species }}</p>
      <!-- Otros detalles del personaje -->
    </div>
  </div>
</template>

<script>
import apiService from '@/services/apiService';

export default {
  data() {
    return {
      character: null,
    };
  },
  mounted() {
    const characterId = this.$route.params.id;
    apiService.getCharacter(characterId)
      .then(response => {
        this.character = response.data;
      })
      .catch(error => {
        console.error('Error fetching character details:', error);
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

  img {
    max-width: 100%;
    height: auto;
    margin-top: 20px;
  }

  p {
    margin-top: 10px;
    color: #555;
  }
</style>

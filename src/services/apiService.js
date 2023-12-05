import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api';

export default {
  getCharacters() {
    return axios.get(`${API_URL}/character`);
  },
  getCharacter(id) {
    return axios.get(`${API_URL}/character/${id}`);
  },
};
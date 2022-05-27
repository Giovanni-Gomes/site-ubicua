import axios from 'axios';

const giphyAPI = axios.create({
  headers: {
    api_key: '1V6GHHb75bB2t02EVqaO8Euc0hIQCGGb'
  },
  baseURL: import.meta.env.VITE_API_GIPHY,
});

export default giphyAPI;

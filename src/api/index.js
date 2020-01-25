import { stolenKey } from '../constants';

export default {
  apiUrl: (offset = 0, query = '') => {
    const apiEndpoint = query ? 'search' : 'trending';
    return `https://api.giphy.com/v1/gifs/${apiEndpoint}?api_key=${stolenKey}&limit=25&rating=g&offset=${offset}&q=${query}`;
  }
};

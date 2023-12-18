import axios from 'axios';

export async function fetchData(query = '', page = '') {
  const URL = 'https://pixabay.com/api/?';
  const params = new URLSearchParams({
    key: '41267904-288ba903f65ff7510d19cbcee',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 40,
  });
  return await axios.get(`${URL}&${params}`).then(response => {
    return response.data;
  });
  
}
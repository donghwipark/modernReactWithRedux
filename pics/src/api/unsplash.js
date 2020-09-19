import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID dL_mqioDpzUZR_xUAuN40zOYBjX7bFDxJhyIXIlk1A0'
  }
});

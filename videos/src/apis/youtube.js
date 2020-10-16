import axios from 'axios';

const KEY = 'AIzaSyBqabXn0ax4ecvUGsjlf9kT52H6T-CVUEI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
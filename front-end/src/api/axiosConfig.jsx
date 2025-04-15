import axios from 'axios';

export default axios.create({
  baseURL: 'https://movie-app-3sgq.onrender.com/' // Your Render backend URL
});
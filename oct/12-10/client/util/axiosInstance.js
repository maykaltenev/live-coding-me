import axios from 'axios';

const axiosApiInstance = axios.create();

axios.defaults.baseURL = 'http://localhost:4000';

export default axiosApiInstance;
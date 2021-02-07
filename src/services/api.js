import axios from 'axios';

const api = axios.create({
    baseURL: 'http://postman-echo.com'
});

export default api;
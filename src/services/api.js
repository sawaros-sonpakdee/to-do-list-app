import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5001',
    timeout: 5000,
    withCredentials: true,
    allowAbsoluteUrls: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

api.interceptors.request.use(function (config) {
    console.log('Config Success!');
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default api;
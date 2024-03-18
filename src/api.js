import axios from 'axios';
const client = axios.create({
    baseURL: 'https://api.outsidein.dev/PdOV6S6KTBbAaSoOGmOGd05DTH61ykXa',
});
const api = {
    async loadRestaurants() {
        const response = await client.get('/restaurants');
        return response.data;
    },
};
export default api;
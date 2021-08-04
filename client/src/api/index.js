import axios from 'axios'

const api = axios.create({
    baseURL: process.env.BASE_URI || 'http://localhost:5000/api',
})

export const getTeamsByMap = map_name => api.get(`/maps/${map_name}`);
export const getTimestamp = () => api.get(`/timestamp`);


const apis = {
    getTeamsByMap,
    getTimestamp
}

export default apis
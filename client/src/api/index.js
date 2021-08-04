import axios from 'axios';

const API_URL = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_BASE_URI : window.API_URL;

const api = axios.create({
    baseURL: API_URL,
})

export const getTeamsByMap = map_name => api.get(`/maps/${map_name}`);
export const getTimestamp = () => api.get(`/timestamp`);


const apis = {
    getTeamsByMap,
    getTimestamp
}

export default apis
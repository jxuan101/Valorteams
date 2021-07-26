import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export const getTeamsByMap = map_name => api.get(`/movie/${map_name}`)

const apis = {
    getTeamsByMap,
}

export default apis
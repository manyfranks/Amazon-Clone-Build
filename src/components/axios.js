import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://us-central1-fir-de961.cloudfunctions.net/api' // The API (cloud function) URL
        // 'http://localhost:5001/fir-de961/us-central1/api'
});

export default instance;
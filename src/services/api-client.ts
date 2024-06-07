import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b646a955cc57474880d78034ee5afc5e'
    }
})
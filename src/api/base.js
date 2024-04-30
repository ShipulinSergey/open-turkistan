import axios from "axios";

export default axios.create({
    baseURL: import.meta.env.VITE_APP_API || 'http://back.openturkistan.com/api',
});
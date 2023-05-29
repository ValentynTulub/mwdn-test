import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3000/";

const client = axios.create({baseURL: apiUrl});
export default client;

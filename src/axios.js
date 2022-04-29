import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-2deb3/us-central1/api' //The API (cloud function) URl
});

export default instance;

//https://us-central1-clone-2deb3.cloudfunctions.net/api
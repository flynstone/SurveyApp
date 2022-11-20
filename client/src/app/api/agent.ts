import axios, { AxiosResponse } from "axios";
import { Survey } from "../models/survey";

// Get back-end url
axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = (response: AxiosResponse) => response.data;

// Generic HTTP requests.
const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody)
}

// Survey Api routes.
const Surveys = {
    list: () => requests.get('/surveys'),
    create: (survey: Survey) => axios.post<void>('/surveys', survey)
}

const agent = {
    Surveys
}

export default agent;
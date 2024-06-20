import axios from "axios";

let BASE_URL = 'https://fundoonotes.incubation.bridgelabz.com/api/';

export const post = (url,data,headerConfig) => {
    return axios.post(BASE_URL+url,data,headerConfig)
}
export const Get = (url, headerConfig) => {
    return axios.get(BASE_URL + url, headerConfig);
}
export const Delete = (url, headerConfig) => {
    return axios.delete(BASE_URL + url, headerConfig);
};

export const Put = (url, data, headerConfig) => {
    return axios.put(BASE_URL + url, data, headerConfig);
};
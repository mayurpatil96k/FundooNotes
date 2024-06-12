import axios from "axios";

let BASE_URL = 'https://fundoonotes.incubation.bridgelabz.com/api/';

export const post = (url,data,headerConfig) => {
    return axios.post(BASE_URL+url,data,headerConfig)
}
export const Get = (url, headerConfig) => {
    return axios.get(BASE_URL + url, headerConfig);
}
export const Delete = ()=>{

}
export const Put = ()=>{

}
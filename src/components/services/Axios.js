import axios from "axios";

let BASE_URL = 'https://fundoonotes.incubation.bridgelabz.com/api/';

export const Post = (url,data,headerConfig) => {
    return axios.post(url,data,headerConfig)
}
export const Get = ()=>{

}
export const Delete = ()=>{

}
export const Put = ()=>{

}
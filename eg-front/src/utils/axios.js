import axios from "axios";

export const request = (method, url, data) => {
    return axios({
        method,
        url,
        data,
    })
        .then(res => res.data)
        .catch(err => console.log(err));
};
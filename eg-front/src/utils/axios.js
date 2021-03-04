import axios from "axios";

export const request = async (method, url, data) => {
    try{
        const payload = await axios({
            method,
            url,
            data,
        });
        console.log(payload.status);
        return payload;
    }catch (e) {
        throw new Error('api error');
    }
};

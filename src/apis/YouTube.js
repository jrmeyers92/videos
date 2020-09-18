import axios from "axios";


const KEY = 'AIzaSyC9vZ1JAE5KW9ajxe8BzRwGDfiAezMN9_Q';



export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
});
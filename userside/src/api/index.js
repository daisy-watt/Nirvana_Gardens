import axios from "axios";

const url = 'http://localhost:5001/posts';

export const fetchPosts = async () => axios.get(url);
export const createPosts = async (post) => axios.post(url, post);


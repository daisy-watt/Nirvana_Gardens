import * as api from "../api"

export const getPosts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: "FETCH_ALL_POSTS", payload: data });
        
    } catch (error) {
        console.log(error.message)
    }

};

export const createPosts = (post) => async (dispatch) => {

    try {
        const { data } = await api.createPosts(post);
        console.log("here")
        dispatch({ type: "CREATE_POSTS", payload: data });
        
    } catch (error) {
        console.log(error.message)
    }

};
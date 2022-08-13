import mongoose from "mongoose";
import Post from "../models/PostModel.js";

const getPosts = async (req, res) => {

    try {
        const post = await Post.find();
        res.status(200).json(post);
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message})
    }

}

const createPost = async (req, res) => {
    const body = req.body;
    console.log(body)

    const newPost = new Post({

        title: body.title,
        image: body.image,
        caption: body.caption
        
        //...body 
    });

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

export { getPosts, createPost };
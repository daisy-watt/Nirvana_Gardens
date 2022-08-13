import { Router } from "express";
import { getPosts, createPost, deletePost } from "../controllers/posts.js";


const router = Router();

router.get("/getPosts", getPosts);
router.post("/createPost", createPost);
router.delete("/deletePost", deletePost);

export default router;
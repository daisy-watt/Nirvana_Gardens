import { Router } from "express";
import { getPosts, createPost } from "../controllers/posts.js";


const router = Router();

router.get("/getPosts", getPosts);
router.post("/createPost", createPost);

export default router;
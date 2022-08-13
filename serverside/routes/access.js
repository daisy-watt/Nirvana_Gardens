import { Router } from "express";
import { isCorrectCode } from "../controllers/access.js";


const router = Router();

router.post("/isCorrectCode", isCorrectCode);


export default router;
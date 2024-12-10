import express from "express";
import { feedbackSubmitController } from "../controllers/feedbackController.js";



const router = express.Router();

router.post('/submit', feedbackSubmitController);
router.get('/', (req, res)=> {
    res.send("<h1> feedback </h1>");
})


export default router;
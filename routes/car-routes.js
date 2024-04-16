import express from "express";
import { getCars } from "../controllers/car-controller.js";

const router = express.Router();

router.get("/", getCars);

export default router;
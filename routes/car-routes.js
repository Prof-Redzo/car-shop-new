import express from "express";
import { getCars, createCar, getCarById, updateCar, deleteCar, buyCar } from "../controllers/car-controller.js";

const router = express.Router();

router.get("/", getCars);

router.post("/", createCar);

router.get("/:id", getCarById);

router.put("/:id", updateCar);

router.delete("/:id", deleteCar);

router.post("/purchase/:id", buyCar);

export default router;
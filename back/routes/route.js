import express, { response } from "express";
import { body } from "express-validator";

import {
//   getCars,
  createCar,
//   deleteCar,
//   editCar,
} from "../controllers/carsController.js";

const router = express.Router();

router.get(
  "/add",
  [
    body("brand").trim().isLength({ min: 200, max: 1 }),
    body("model").trim().isLength({ min: 1, max: 100 }),
  ],
  createCar
);


export default router;
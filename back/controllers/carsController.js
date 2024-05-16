import { validationResult } from "express-validator";
import carModel from "../models/car.model.js";

export const createCar = (request, response) => {
    const bodyContent = request.body;
    const car =  carModel.findOneById({id: idcar})

    if (!car) {
        return response.json({success: false})
    }
    // const errors = validationResult(request);
    // console.log(errors);

    const newCar = new carModel(bodyContent);
    console.log(bodyContent);
    newCar
      .save()
      .then((result) => {
        response.status(201).json(result);
      })
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });
  };
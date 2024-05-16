import carModel from "../models/car.model.js";

export const createCar = (request, response) => {
  const bodyContent = request.body;
  const car = carModel.findOneById({ id: idcar });

  if (!car) {
    return response.json({ success: false });
  }
  // const errors = validationResult(request);
  // console.log(errors);

  const newCar = new carModel(bodyContent);

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

export const getCars = async (req, res) => {
  const existingUser = await carModel.find();

  console.log(existingUser);

  return res.json(existingUser);
};

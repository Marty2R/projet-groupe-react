import carModel from "../models/car.model.js";

export const createCar = (request, response) => {
  const bodyContent = request.body;
  const car = carModel.findOneById({ id: idcar });

  if (!car) {
    return response.json({ success: false });
  }

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
  console.log("get cars");
  const existingUser = await carModel.find();
  return res.json(existingUser);
};

export const deleteCar = async (req, res) => {
  const { id } = req.params;

  const car = await carModel.findById({ _id: id });

  console.log(car);

  if (!car) {
    return res.json({ success: false });
  }

  await carModel.deleteOne({ _id: id });

  return res.json({ success: true });
};

export const getCarById = async (req, res) => {
  const { id } = req.params;

  const car = await carModel.findById({ _id: id });

  if (!car) {
    return res.json({ success: false });
  }

  return res.json(car);
};

export const updateCar = async (req, res) => {
  const { id } = req.params;
  const bodyContent = req.body;

  console.log(bodyContent);

  const car = await carModel.findById({ _id: id });

  if (!car) {
    return res.json({ success: false });
  }

  console.log(bodyContent);

  const updatedCar = await carModel.findOneAndUpdate(
    {
      _id: id,
    },
    {
      ...bodyContent,
    },
    {
      new: true,
    }
  );

  if (!updatedCar) {
    return res.json({ success: false });
  }

  return res.json({ success: true, car: updatedCar });
};

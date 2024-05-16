import fetchApi from "./index.js";

const UR_API_GET_CARS = "http://localhost:8000/cars";
const UR_API_DELETE_CARS = "http://localhost:8000/cars";
const UR_API_UPDATE_CARS = "http://localhost:8000/cars";
const UR_API_GET_BY_ID_CARS = "http://localhost:8000/cars";

// Get all cars from the database

export const getCars = async () => {
  return fetchApi(`${UR_API_GET_CARS}`, "GET", {
    "Content-Type": "application/json",
  });
};

// Delete a car from the database

export const deleteCar = async (id) => {
  return fetchApi(`${UR_API_DELETE_CARS}/${id}`, "DELETE", {
    "Content-Type": "application/json",
  });
};

export const getCarById = async (id) => {
  return fetchApi(`${UR_API_GET_BY_ID_CARS}/${id}`, "GET", {
    "Content-Type": "application/json",
  });
};

export const updateCar = async (id, data) => {
  return fetchApi(
    `${UR_API_UPDATE_CARS}/${id}`,
    "PUT",
    {
      "Content-Type": "application/json",
    },
    JSON.stringify(data)
  );
};

export default {
  getCars,
  getCarById,
  deleteCar,
  updateCar,
};

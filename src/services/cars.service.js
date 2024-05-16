import fetchApi from "./index.js";

const UR_API_GET_CARS = "http://localhost:8000/cars";
const UR_API_DELETE_CARS = "http://localhost:8000/cars";

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

export const updatePart = async () => {
  return fetchApi(`${UR_API_GET_CARS}`, "GET", {
    "Content-Type": "application/json",
  });
};

export default {
  getCars,
  deleteCar,
  updatePart,
};

import fetchApi from "./index.js";

const UR_API_GET_CARS = "https://group-isitech-back.vercel.app/cars";
const UR_API_DELETE_CARS = "https://group-isitech-back.vercel.app/cars";
const UR_API_UPDATE_CARS = "https://group-isitech-back.vercel.app/cars";
const UR_API_GET_BY_ID_CARS = "https://group-isitech-back.vercel.app/cars";
const URL_API_ADD_CAR = "https://group-isitech-back.vercel.app/cars";

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

export const addCar = async (data) => {
  return fetchApi(
    `${URL_API_ADD_CAR}`,
    "POST",
    {
      "Content-Type": "application/json",
    },
    JSON.stringify(data)
  );
};

export default {
  addCar,
  getCars,
  getCarById,
  deleteCar,
  updateCar,
};

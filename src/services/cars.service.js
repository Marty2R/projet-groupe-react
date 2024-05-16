import fetchApi from "./index.js";

const UR_API_GET_CARS = "http://localhost:8000/cars";

export const getCars = async () => {
  return fetchApi(`${UR_API_GET_CARS}`, "GET", {
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
  updatePart,
};

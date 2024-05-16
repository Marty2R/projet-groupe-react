function getAllCars() {
  const object = {
    data: [
      // Audi
      {
        id: 1,
        model: "A3",
        brand: "Audi",
        year: "2021",
        color: "black",
        price: 45000,
      },
      {
        id: 2,
        model: "A4",
        brand: "Audi",
        year: "2021",
        color: "white",
        price: 50000,
      },
      {
        id: 3,
        model: "A5",
        brand: "Audi",
        year: "2017",
        color: "white",
        price: 50000,
      },
      // BMW
      {
        id: 4,
        model: "M3",
        brand: "BMW",
        year: "2016",
        color: "red",
        price: 60000,
      },
      {
        id: 5,
        model: "M4",
        brand: "BMW",
        year: "2021",
        color: "yellow",
        price: 65000,
      },
      {
        id: 6,
        model: "M5",
        brand: "BMW",
        year: "2021",
        color: "green",
        price: 70000,
      },

      // Porshe

      {
        id: 7,
        model: "911",
        brand: "Porshe",
        year: "2021",
        color: "black",
        price: 75000,
      },
      {
        id: 8,
        model: "Cayman",
        brand: "Porshe",
        year: "2021",
        color: "white",
        price: 80000,
      },
      {
        id: 9,
        model: "Panamera",
        brand: "Porshe",
        year: "2021",
        color: "blue",
        price: 85000,
      },

      // Lamborghini

      {
        id: 10,
        model: "Aventador",
        brand: "Lamborghini",
        year: "2021",
        color: "red",
        price: 90000,
      },
      {
        id: 11,
        model: "Huracan",
        brand: "Lamborghini",
        year: "2021",
        color: "yellow",
        price: 95000,
      },
      {
        id: 12,
        model: "Urus",
        brand: "Lamborghini",
        year: "2021",
        color: "green",
        price: 100000,
      },

      // Volvo

      {
        id: 13,
        model: "S60",
        brand: "Volvo",
        year: "2021",
        color: "black",
        price: 105000,
      },
      {
        id: 14,
        model: "S90",
        brand: "Volvo",
        year: "2021",
        color: "white",
        price: 110000,
      },
      {
        id: 15,
        model: "XC60",
        brand: "Volvo",
        year: "2021",
        color: "blue",
        price: 115000,
      },
    ],
  };

  return object;
}

export default {
  getAllCars,
};

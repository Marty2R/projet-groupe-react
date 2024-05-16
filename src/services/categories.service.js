function getAllCategories() {
  const object = {
    data: [
      {
        id: 1,
        label: "Science",
      },
      {
        id: 2,
        label: "Fiction",
      },
      {
        id: 3,
        label: "History",
      },
      {
        id: 4,
        label: "Biography",
      },
      {
        id: 5,
        label: "Fantasy",
      },
    ],
  };

  return object;
}

export default {
  getAllCategories,
};

import fetchApi from ".";

const UR_API_UPDATE_PART = "/part/update";

function getAllParts() {
  const object = {
    data: [
      {
        id: 1,
        label: "Science",
        categories: "Science",
      },
      {
        id: 2,
        label: "Fiction",
        categories: "Fiction",
      },
      {
        id: 3,
        label: "History",
        categories: "History",
      },
      {
        id: 4,
        label: "Biography",
        categories: "Biography",
      },
      {
        id: 5,
        label: "Fantasy",
        categories: "Fantasy",
      },
      {
        id: 6,
        label: "Mystery",
        categories: "Mystery",
      },
      {
        id: 7,
        label: "Horror",
        categories: "Horror",
      },
      {
        id: 8,
        label: "Romance",
        categories: "Romance",
      },
      {
        id: 9,
        label: "Self Help",
        categories: "Self Help",
      },
      {
        id: 10,
        label: "Cooking",
        categories: "Cooking",
      },
      {
        id: 11,
        label: "Travel",
        categories: "Travel",
      },
      {
        id: 12,
        label: "Health",
        categories: "Health",
      },
    ],
  };

  return object;
}

// export const updatePart = async (part, id) => {
//   const response = await fetch(`${UR_API_UPDATE_PART}/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(part),
//   });

//   return response.json();
// };

export const updatePart = async (part, id) => {
  return fetchApi(
    `${UR_API_UPDATE_PART}/${id}`,
    "PUT",
    {
      "Content-Type": "application/json",
    },
    JSON.stringify(part)
  );
};

export default {
  getAllParts,
};

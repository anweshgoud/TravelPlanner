import { createSlice } from "@reduxjs/toolkit";

const AfricaCountry = createSlice({
  name: "AfricaCountry",
  initialState: {
    South_Africa: [
      {
        city: "Cape Town",
        date: 0,
        places: [
          "Visit Table Mountain for panoramic views",
          "Explore the historic Robben Island",
          "Stroll through the Victoria & Alfred Waterfront",
        ],
      },
      {
        city: "Johannesburg",
        date: 2,
        places: [
          "Visit the Apartheid Museum",
          "Explore the Cradle of Humankind",
          "Shop and dine in Sandton City",
        ],
      },
      // Add more cities in South Africa
    ],
    Morocco: [
      {
        city: "Marrakech",
        date: 0,
        places: [
          "Explore the bustling Jemaa el-Fnaa square",
          "Visit the Bahia Palace and Saadian Tombs",
          "Wander through the vibrant souks of the Medina",
        ],
      },
      {
        city: "Fez",
        date: 2,
        places: [
          "Discover the historic Bou Inania Madrasa",
          "Explore the ancient Medina of Fez",
          "Visit the Al-Attarine Madrasa",
        ],
      },
      // Add more cities in Morocco
    ],
    Kenya: [
      {
        city: "Nairobi",
        date: 0,
        places: [
          "Visit the David Sheldrick Wildlife Trust",
          "Explore the Karen Blixen Museum",
          "Discover the Nairobi National Museum",
        ],
      },
      {
        city: "Maasai Mara",
        date: 2,
        places: [
          "Experience a safari in Maasai Mara National Reserve",
          "Witness the Great Migration of wildebeests",
          "Interact with the Maasai community",
        ],
      },
      // Add more cities in Kenya
    ],
    Tanzania: [
      {
        city: "Arusha",
        date: 0,
        places: [
          "Gateway to Mount Kilimanjaro and Serengeti National Park",
          "Explore the Arusha National Park",
          "Visit the Meserani Snake Park",
        ],
      },
      {
        city: "Zanzibar City",
        date: 2,
        places: [
          "Stroll through Stone Town's narrow streets",
          "Relax on the beaches of Nungwi and Kendwa",
          "Visit the historic House of Wonders",
        ],
      },
      // Add more cities in Tanzania
    ],
    Namibia: [
      {
        city: "Windhoek",
        date: 0,
        places: [
          "Explore the Independence Memorial Museum",
          "Visit the Christuskirche and Tintenpalast",
          "Stroll through the Namibian Craft Centre",
        ],
      },
      {
        city: "Swakopmund",
        date: 2,
        places: [
          "Enjoy outdoor activities in the adventure capital",
          "Visit the Swakopmund Museum",
          "Explore the nearby Namib Desert and dunes",
        ],
      },
      // Add more cities in Namibia
    ],
  },
  reducers: {
    HandleClick: (state) => {
      console.log(state);
    },
  },
});

export const AfricaCountryActions = AfricaCountry.actions;
export default AfricaCountry;

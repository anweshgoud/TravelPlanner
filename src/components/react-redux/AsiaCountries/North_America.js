import { createSlice } from "@reduxjs/toolkit";

const NorthAmericaCountry = createSlice({
  name: "NorthAmericaCountry",
  initialState: {
    USA: [
      {
        city: "New York City",
        date: 0,
        places: [
          "Explore Times Square and Broadway",
          "Visit Central Park and the MET Museum",
          "Enjoy the views from the Empire State Building",
        ],
      },
      {
        city: "Los Angeles",
        date: 2,
        places: [
          "Visit Hollywood and the Walk of Fame",
          "Explore Santa Monica Pier and Venice Beach",
          "Take a tour of the Getty Center",
        ],
      },
      // Add more cities in the USA
    ],
    Canada: [
      {
        city: "Toronto",
        date: 0,
        places: [
          "Visit the CN Tower and Ripley's Aquarium",
          "Explore the Royal Ontario Museum",
          "Stroll through Distillery District",
        ],
      },
      {
        city: "Vancouver",
        date: 2,
        places: [
          "Enjoy Stanley Park and the Seawall",
          "Visit Granville Island Public Market",
          "Explore the Capilano Suspension Bridge Park",
        ],
      },
      // Add more cities in Canada
    ],
    Mexico: [
      {
        city: "Mexico City",
        date: 0,
        places: [
          "Explore the historic Zocalo and Templo Mayor",
          "Visit the National Museum of Anthropology",
          "Discover the artistic neighborhood of Coyoacan",
        ],
      },
      {
        city: "Cancun",
        date: 2,
        places: [
          "Relax on the beautiful beaches of the Yucatan Peninsula",
          "Explore Mayan ruins in Tulum",
          "Take a boat tour to Isla Mujeres",
        ],
      },
      // Add more cities in Mexico
    ],
  },
  reducers: {
    HandleClick: (state) => {
      console.log(state);
    },
  },
});

export const NorthAmericaCountryActions = NorthAmericaCountry.actions;
export default NorthAmericaCountry;

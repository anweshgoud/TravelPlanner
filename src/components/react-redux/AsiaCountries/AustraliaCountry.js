import { createSlice } from "@reduxjs/toolkit";

const AustraliaCountry = createSlice({
  name: "AustraliaCountry",
  initialState: {
    Sydney: [
      {
        city: "Sydney",
        date: 0,
        places: [
          "Explore the iconic Sydney Opera House",
          "Visit the Sydney Harbour Bridge",
          "Relax at Bondi Beach",
        ],
      },
      // Add more places in Sydney
    ],
    Perth: [
      {
        city: "Perth",
        date: 2,
        places: [
          "Explore Kings Park and Botanic Garden",
          "Visit Cottesloe Beach",
          "Take a stroll in Fremantle",
        ],
      },
      // Add more places in Perth
    ],
    Canberra: [
      {
        city: "Canberra",
        date: 4,
        places: [
          "Visit the Australian War Memorial",
          "Explore the National Gallery of Australia",
          "Stroll through Lake Burley Griffin",
        ],
      },
      // Add more places in Canberra
    ],
    Tasmania: [
      {
        city: "Hobart",
        date: 6,
        places: [
          "Explore Salamanca Place and Market",
          "Visit MONA (Museum of Old and New Art)",
          "Take a trip to Mount Wellington",
        ],
      },
      // Add more places in Tasmania
    ],
  },
  reducers: {
    HandleClick: (state) => {
      console.log(state);
    },
  },
});

export const AustraliaCountryActions = AustraliaCountry.actions;
export default AustraliaCountry;

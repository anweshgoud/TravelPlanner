import { createSlice } from "@reduxjs/toolkit";

const SouthAmericaCountry = createSlice({
  name: "SouthAmericaCountry",
  initialState: {
    Brazil: [
      {
        city: "Rio de Janeiro",
        date: 0,
        places: [
          "Visit the iconic Christ the Redeemer statue",
          "Relax on Copacabana and Ipanema beaches",
          "Explore the historic Sugarloaf Mountain",
        ],
      },
      {
        city: "Sao Paulo",
        date: 2,
        places: [
          "Experience vibrant culture in Paulista Avenue",
          "Visit the São Paulo Museum of Art",
          "Explore the Municipal Market of São Paulo",
        ],
      },
      
    ],
    Chile: [
      {
        city: "Santiago",
        date: 0,
        places: [
          "Explore the historic Plaza de Armas",
          "Visit the Metropolitan Cathedral",
          "Hike or take a cable car to the top of San Cristóbal Hill",
        ],
      },
      {
        city: "Valparaiso",
        date: 2,
        places: [
          "Wander through the colorful streets and murals",
          "Visit Pablo Neruda's house, La Sebastiana",
          "Take a boat tour of the Valparaiso Harbor",
        ],
      },
      
    ],
    Peru: [
      {
        city: "Lima",
        date: 0,
        places: [
          "Explore the historic center of Lima",
          "Visit the Larco Museum with pre-Columbian art",
          "Taste Peruvian cuisine in Miraflores",
        ],
      },
      {
        city: "Cusco",
        date: 2,
        places: [
          "Discover the ancient Inca capital",
          "Visit the Sacsayhuaman fortress",
          "Explore the vibrant San Pedro Market",
        ],
      },
      
    ],
    Argentina: [
      {
        city: "Buenos Aires",
        date: 0,
        places: [
          "Explore the historic neighborhoods of San Telmo and La Boca",
          "Visit the iconic Teatro Colon",
          "Experience tango in Plaza Dorrego",
        ],
      },
      {
        city: "Mendoza",
        date: 2,
        places: [
          "Discover the vineyards and wineries",
          "Explore the foothills of the Andes",
          "Enjoy outdoor activities in the Aconcagua region",
        ],
      },
      
    ],
  },
  reducers: {
    HandleClick: (state) => {
      console.log(state);
    },
  },
});

export const SouthAmericaCountryActions = SouthAmericaCountry.actions;
export default SouthAmericaCountry;

import { createSlice } from "@reduxjs/toolkit";

const EuropeCountry = createSlice({
  name: "EuropeCountry",
  initialState: {
    Italy: [
      {
        city: "Rome",
        date: 0,
        places: [
          "Explore the historic Colosseum and Roman Forum",
          "Visit Vatican City and St. Peter's Basilica",
          "Throw a coin in the Trevi Fountain for good luck",
        ],
      },
      {
        city: "Florence",
        date: 2,
        places: [
          "Admire Renaissance art at the Uffizi Gallery",
          "Visit the iconic Florence Cathedral and Giotto's Campanile",
          "Stroll across the Ponte Vecchio bridge",
        ],
      },
      {
        city: "Venice",
        date: 4,
        places: [
          "Take a romantic gondola ride along the Grand Canal",
          "Explore St. Mark's Square and Basilica",
          "Visit the historic Doge's Palace",
        ],
      },
    ],
    France: [
      {
        city: "Paris",
        date: 0,
        places: [
          "Visit the iconic Eiffel Tower",
          "Explore the Louvre Museum and see the Mona Lisa",
          "Stroll along the Champs-Élysées",
        ],
      },
      {
        city: "Nice",
        date: 2,
        places: [
          "Relax on the Promenade des Anglais",
          "Explore the Old Town (Vieux Nice)",
          "Visit the Marc Chagall National Museum",
        ],
      },
      // Add more cities in France
    ],
    Switzerland: [
      {
        city: "Zurich",
        date: 0,
        places: [
          "Explore the picturesque Old Town (Altstadt)",
          "Visit the Swiss National Museum",
          "Enjoy a boat cruise on Lake Zurich",
        ],
      },
      {
        city: "Lucerne",
        date: 2,
        places: [
          "Visit the Chapel Bridge and Water Tower",
          "Explore the Old Town and Chapel of St. Peter",
          "Take a scenic boat trip on Lake Lucerne",
        ],
      },
      // Add more cities in Switzerland
    ],
    Greece: [
      {
        city: "Athens",
        date: 0,
        places: [
          "Explore the ancient Acropolis and Parthenon",
          "Visit the National Archaeological Museum",
          "Stroll through the historic Plaka neighborhood",
        ],
      },
      {
        city: "Santorini",
        date: 2,
        places: [
          "Enjoy the stunning sunset in Oia",
          "Explore the archaeological site of Akrotiri",
          "Relax on the beautiful beaches of Perissa",
        ],
      },
      // Add more cities in Greece
    ],
    Norway: [
      {
        city: "Oslo",
        date: 0,
        places: [
          "Visit the Viking Ship Museum",
          "Explore the Royal Palace and surrounding park",
          "Discover contemporary art at the Astrup Fearnley Museum",
        ],
      },
      {
        city: "Bergen",
        date: 2,
        places: [
          "Explore the UNESCO-listed Bryggen Wharf",
          "Take a funicular to Mount Fløyen for panoramic views",
          "Visit the Edvard Grieg Museum in Troldhaugen",
        ],
      },
      // Add more cities in Norway
    ],
    Scotland: [
      {
        city: "Edinburgh",
        date: 0,
        places: [
          "Explore the historic Edinburgh Castle",
          "Walk down the Royal Mile in Old Town",
          "Visit the National Museum of Scotland",
        ],
      },
      {
        city: "Glasgow",
        date: 2,
        places: [
          "Visit the Kelvingrove Art Gallery and Museum",
          "Explore the Glasgow Cathedral and Necropolis",
          "Stroll through the vibrant West End",
        ],
      },
      // Add more cities in Scotland
    ],
  },
  reducers: {
    HandleClick: (state) => {
      console.log(state);
    },
  },
});

export const EuropeCountryActions = EuropeCountry.actions;
export default EuropeCountry;

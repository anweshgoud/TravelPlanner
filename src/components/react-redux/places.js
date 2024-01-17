import { createSlice } from "@reduxjs/toolkit";

const Places = createSlice({
  name: 'places1',
  initialState: {
    continents: ["Australia", "Asia", "Africa", "North_America", "South_America", "Europe"],
  },
  reducers: {
    HandleClick: (state) => {
      console.log(state);
    },
  },
});

export const { HandleClick } = Places.actions;

export default Places;

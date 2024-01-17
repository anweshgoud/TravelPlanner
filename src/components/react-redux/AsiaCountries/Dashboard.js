import { createSlice } from "@reduxjs/toolkit";

const Dashboard1=createSlice({
    name:'dashingboard',
    initialState:{dashboard:[]},
    reducers:{
        HandlebuttonAdd:(state,action)=>{
            state.dashboard = [...state.dashboard, action.payload];
            console.log(state.dashboard);
        },

        HandlebuttonRemove:(state,action)=>{
            let newArray=state.dashboard.filter(item=>item!=action.payload);
            state.dashboard=newArray;
            console.log(state.dashboard);
        },
    },
});

export const {HandlebuttonAdd,HandlebuttonRemove}=Dashboard1.actions;
export default Dashboard1;
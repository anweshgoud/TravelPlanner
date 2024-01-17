import { createSlice } from "@reduxjs/toolkit";

const AsiaCountry=createSlice({
    name:'Countries',
    initialState:{Asia:['India','Japan','South_Korea','Thailand','Vietnam','Sri_Lanka'],Europe:['Italy','Switzerland','Greece','France','Norway','Scotland'],Africa:['South_Africa','Morocco','Kenya','Tanzania','Namibia'],North_America:['Canada','USA','Mexico'],South_America:['Brazil','Chile','Peru','Argentina'],Australia:['Perth','Sydney','Canberra','Tasmania']},
    reducers:{

        HandleClick:(state)=>{
            console.log('Asia');
        }

    }
})

export const AsiaCountryActions=AsiaCountry.actions;

export default AsiaCountry;
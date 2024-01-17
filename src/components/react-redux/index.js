import { configureStore } from "@reduxjs/toolkit";
import Places from "./places";
import AsiaCountry from "./Continents_Countries";
import AsiaCountry6 from "./AsiaCountries/AsiaCountry";

import EuropeCountry from "./AsiaCountries/Europecountry";
import AfricaCountry from "./AsiaCountries/AfricanCountry";
import SouthAmericaCountry from "./AsiaCountries/South_America";
import NorthAmericaCountry from "./AsiaCountries/North_America";
import AustraliaCountry from "./AsiaCountries/AustraliaCountry";
import Dashboard1 from "./AsiaCountries/Dashboard";
const Store=configureStore({
    reducer:{counter:Places.reducer,Countries:AsiaCountry.reducer,Asia:AsiaCountry6.reducer,Europe:EuropeCountry.reducer,Africa:AfricaCountry.reducer,South_America:SouthAmericaCountry.reducer,North_America:NorthAmericaCountry.reducer,Australia:AustraliaCountry.reducer,Dashboard:Dashboard1.reducer}
})

export default Store;
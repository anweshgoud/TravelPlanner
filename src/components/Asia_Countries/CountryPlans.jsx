import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import PlanesWishes from "./planswishes";

const CountryPlans = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const continent = searchParams.get("continent");
  const country = searchParams.get("country");
  const continentKey = continent ? continent.replace(/"/g, "") : null;
  const countryKey = country ? country.replace(/"/g, "") : null;
  const cities = useSelector((store) => store[continentKey][countryKey]);
  
  return (
    <div>
      <PlanesWishes cities={cities} continentKey={continentKey} countryKey={countryKey}></PlanesWishes>
    </div>
  );
};

export const countryKey=1;
export default CountryPlans;

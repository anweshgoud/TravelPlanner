import Eachcity from "./EachCity";

const PlanesWishes = ({ cities,continentKey, countryKey}) => {
  return (
    <>
      <Eachcity cities={cities} continentKey={continentKey} countryKey={countryKey}></Eachcity>
    </>
  );
};

export default PlanesWishes;

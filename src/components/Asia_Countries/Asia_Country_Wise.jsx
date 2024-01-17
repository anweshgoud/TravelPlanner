import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ContinentsCountries from "./WholeContinent";

const Asian = () => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const receivedData = searchParams.get("data");

  const continentKey = receivedData ? receivedData.replace(/"/g, "") : null;

  const ContinentsCountry = useSelector(
    (store) => store.Countries[continentKey] || []
  );

  return (
    <div>
      <div className="px-4 py-5 my-5 text-start">
        <h1
          className="display-5 fw-semibold text-body-emphasis"
          style={{ marginLeft: "25%",fontFamily:'BioRhyme',WebkitTextFillColor:'#383333'}}
        >
          Please Select Country from {continentKey}
        </h1>
      </div>
      <div className="Country" style={{display:'flex',flexWrap:'wrap'}}>
        {ContinentsCountry?.map((country, index) => (
          <ContinentsCountries
            Continent={continentKey}
            country={country}
            key={index}
          ></ContinentsCountries>
        ))}
      </div>
    </div>
  );
};

export default Asian;

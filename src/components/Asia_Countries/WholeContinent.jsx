import { Link } from "react-router-dom";

const ContinentsCountries = ({ Continent, country, index }) => {
  const Imageurl = country + '.jpg';

  const searchString = `?continent=${encodeURIComponent(Continent)}&country=${encodeURIComponent(country)}`;

  return (
    <div
      className="Styling bg-body-secondary bg-opacity-25 onon transition-container CountryImage"
      style={{
        width: "30%",
        height: "35%",
        border: "solid 0.1px",
        margin: "15px 15px",
        borderRadius: "20px",
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      <div className="my-3" style={{ padding: "0px" }}>
        <h2 className="display-5 text-center">{country}</h2>
        <Link to={`/Countryplans${searchString}`}>
          <p className="lead text-center">Click here for Trip plans</p>
        </Link>
        <div
          className="bg-body shadow-sm mx-auto transition-element"
          style={{
            width: "80%",
            height: "300px",
            borderRadius: "21px 21px 21px 21px",
            backgroundImage: `url(${Imageurl})`,
            marginBottom: "5px",
            backgroundSize: "cover",
            transition: "opacity 0.3s ease-in-out",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ContinentsCountries;

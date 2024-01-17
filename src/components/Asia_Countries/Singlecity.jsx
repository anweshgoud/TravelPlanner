import { useState, useEffect } from "react";

const SingleCity = ({ citing, date1 }) => {
  const parsedInputDate = new Date(date1);
  const twoDaysLater = new Date(parsedInputDate);
  twoDaysLater.setDate(parsedInputDate.getDate() + citing.date);

  const formattedDate = `${
    twoDaysLater.getDate() < 10 ? "0" : ""
  }${twoDaysLater.getDate()}-${twoDaysLater.getMonth() + 1 < 10 ? "0" : ""}${
    twoDaysLater.getMonth() + 1
  }-${twoDaysLater.getFullYear()}`;

  const [weatherData, setWeatherData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const apiKey = "434a52f498e9d9e2a6d053becb4d0363";

  useEffect(() => {
    const fetchData = async () => {
      console.log("Date1 prop:", date1);
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${citing.city}&date=${formattedDate}&appid=${apiKey}`
        );

        if (!response.ok) {
          throw new Error("Unable to fetch weather data");
        }

        const data = await response.json();

        if (data.main) {
          setWeatherData({
            temperature: (data.main.temp - 273.15).toFixed(2),
            weather: data.weather[0].description,
          });
        } else {
          setError("Unable to retrieve temperature and weather information.");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiKey, citing.city, formattedDate, date1]);

  const textStyle = {
    fontFamily: "Kalam,sans-serif",
    fontSize: "2.1rem",
  };

  return (
    <>
      <div
        className="hinanna"
        style={{
          margin: "0px 10px 20px 10px",
          height:'100%',
          widht:'100%',
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
        }}
      >
        <div
          className="EachCity text-center"
          style={{
            width:'100%',
            height:'100%',
            padding:'25px 25px 25px 25px',
          }}
        >
          <article className="blog-post" style={{height:'100%',width:'100%'}}>
            <h2 className="display-5 link-body-emphasis mb-1" style={{fontFamily:'Kaushan Script'}}> 
              {citing.city}
            </h2>
            <p
              className="blog-post-meta"
              style={{ fontWeight: "bold", fontSize: "1rem" }}
            >
              Trip Date: {formattedDate}
            </p>
            {loading ? (
              <p>Loading weather information...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              <>
                <p className="blog-post-meta" style={{ fontWeight: "bold" }}>
                  Weather: {weatherData.weather}
                </p>
                <p
                  className="blog-post-meta semi-bolder"
                  style={{ fontWeight: "bold" }}
                >
                  Temperature: {weatherData.temperature}°C
                </p>
              </>
            )}
            <ul>
              {citing.places.map((place, index) => (
                <li key={index} className="list_Cities">{place}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </>
  );
};

export default SingleCity;

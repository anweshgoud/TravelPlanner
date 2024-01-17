import { useEffect, useState } from "react";

const Features = () => {
  const imagesInfo = [
    {
      image: "TravelSlide1.jpg",
      title: "Effortless Trip Planning",
      description:
        "Seamlessly plan your trips across diverse countries with an intuitive and user-friendly interface.",
    },
    {
      image: "TravelSlide2.jpg",
      title: "City-specific Exploration",
      description:
        "Discover in-depth details about cities, making it easier to curate your travel itinerary for a personalized experience.",
    },
    {
      image: "TravelSlide3.jpg",
      title: "Organize and Celebrate",
      description:
        "Add upcoming trips to your dashboard and celebrate completed journeys, creating a visual record of your travel adventures.",
    },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the image index or loop back to the first image
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesInfo.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [currentImageIndex, imagesInfo.length]);

  const { image, title, description } = imagesInfo[currentImageIndex];

  const imageStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <>
      <main>
        <div
          id="myCarousel"
          className="carousel slide mb-6"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className="carousel-item active text-center"
              style={{ height: "600px" }}
            >
              <div className="slideshow-container">
                <div className="slideshow-image" style={imageStyle}></div>
                <div className="image-overlay">
                  <h1>{title}</h1>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container marketing">
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div
              className="col-md-7"
              style={{ marginTop: "7%", fontFamily: "Dancing Script" }}
            >
              <h2 className="featurette-heading fw-normal lh-1">
                Plan Your Trip
              </h2>
              <p className="lead">
                Easily plan your itinerary with our user-friendly interface. Add
                your favorite sites to your trip plan and organize your schedule
                effortlessly.
              </p>
            </div>
            <div className="col-md-5">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                style={{ width: "500px", height: "500px" }}
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                viewBox="0 0 100 100"
              >
                <defs>
                  <pattern
                    id="image1" // Unique ID for the first image
                    x="0"
                    y="0"
                    width="1"
                    height="1"
                    viewBox="0 0 100 100"
                  >
                    <image
                      href="FeatureTravel1.jpg"
                      x="0"
                      y="0"
                      width="100"
                      height="100"
                    />
                  </pattern>
                </defs>
                <rect
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  fill="url(#image1)"
                />
              </svg>
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div
              className="col-md-7 order-md-2"
              style={{ marginTop: "7%", fontFamily: "Dancing Script" }}
            >
              <h2 className="featurette-heading fw-normal lh-1">
                Dashboard Integration
              </h2>
              <p className="lead">
                Save your trip plans to the Dashboard for quick access. Having
                all your travel details in one place makes it convenient to
                manage and modify your itinerary.
              </p>
            </div>
            <div className="col-md-5">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                style={{ width: "500px", height: "500px" }}
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                viewBox="0 0 100 100"
              >
                <defs>
                  <pattern
                    id="image2"
                    x="0"
                    y="0"
                    width="1"
                    height="1"
                    viewBox="0 0 100 100"
                  >
                    <image
                      href="FeatureTravel2.jpg"
                      x="0"
                      y="0"
                      width="100"
                      height="100"
                    />
                  </pattern>
                </defs>
                <rect
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  fill="url(#image2)"
                />
              </svg>
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div
              className="col-md-7"
              style={{ marginTop: "7%", fontFamily: "Dancing Script" }}
            >
              <h2 className="featurette-heading fw-normal lh-1">
                Track Completed Trips
              </h2>
              <p className="lead">
                After your journey, move your trip from the planning phase to
                the completed list. Share your travel accomplishments and
                memories with fellow adventurers!
              </p>
            </div>
            <div className="col-md-5">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                style={{ width: "500px", height: "500px" }}
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                viewBox="0 0 100 100"
              >
                <defs>
                  <pattern
                    id="image3" // Unique ID for the third image
                    x="0"
                    y="0"
                    width="1"
                    height="1"
                    viewBox="0 0 100 100"
                  >
                    <image
                      href="FeatureTravel3.jpg"
                      x="0"
                      y="0"
                      width="100"
                      height="100"
                    />
                  </pattern>
                </defs>
                <rect
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  fill="url(#image3)"
                />
              </svg>
            </div>
          </div>

          <hr className="featurette-divider" />
        </div>
      </main>
    </>
  );
};

export default Features;

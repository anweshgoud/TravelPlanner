import { useSelector } from "react-redux";
import ContinentWise from "./ContinentWise";

const ContinentPlaces = () => {

  const { continents } = useSelector((store) => store.counter);
  return (
    <div
      className="container px-4 py-5 ContainerBox"
      style={{ width: "100%", marginTop: "0%" }}
      id="custom-cards"
    >
      <h2 className="pb-2 border-bottom">Continents,You would like to Visit</h2>
      <div
        className="Helloji"
        style={{ width: "100%", display: "flex", flexWrap: "wrap" }}
      >
        <div
          className="col- mb-4 posts"
          style={{ display: "flex", flexWrap: "wrap", marginBottom: "1.5rem" }}
        >
          {continents.map((item, index) => (
            <ContinentWise
              key={index}
              post={item}
              key1={item}
            ></ContinentWise>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContinentPlaces;

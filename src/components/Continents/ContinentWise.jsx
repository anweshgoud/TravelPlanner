import { Link } from "react-router-dom";
import { useState } from "react";

const ContinentWise = ({ post, key1 }) => {
  const [hoverimage, setHoveredImage] = useState(null);

  const HandleHover = (index) => {
    setHoveredImage(index);
  };

  const HandleNothover = () => {
    setHoveredImage(null);
  };

  const ImageValue = post + ".jpg";

  return (
    <div className="col-6 mb-5">
      <div
        className={`${
          key1 === hoverimage ? "colorful" : "blackWhite"
        } card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg posts2`}
        style={{
          backgroundImage: `url(./dist/${ImageValue})`,
          backgroundSize: "cover",
          backgroundPosition:'center',
          objectFit: "cover",
        }}
        onMouseEnter={() => HandleHover(key1)}
        onMouseLeave={() => HandleNothover()}
      >
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <Link
            to={{
              pathname: "/country",
              search: `?data=${encodeURIComponent(JSON.stringify(post))}`,
            }}
            className="fw-semibold text-white"
          >
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{post}</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContinentWise;

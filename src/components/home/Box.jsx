import styles from "./Box.module.css";
import { Link } from "react-router-dom";
const Card = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bolding">
      <div className="card CardDetails" style={{ width: "30rem", height: "30rem",borderRadius:'10%'}}>
        <div className="card-body" style={{marginTop:'5%'}}>
          <h5
            className="card-title text-center"
            style={{
              fontFamily: "Kalnia",
              fontWeight: "bolder",
              fontSize: "3rem",
            }}
          >
            Travel Planner
          </h5>
          <p
            className="card-text text-center "
            style={{
              fontStyle: "italic",
              fontSize: "1rem",
            }}
          >
            Make your trips easy....
          </p>

          <div className="text-center">
            <p style={{ fontSize: "1.5rem", marginTop: "10px" }}>
              Create Account
            </p>
            <Link to="/signup" className="card-link" style={{ marginTop: "10px" }} id="434353gfbfbf">
              <button type="button" className="btn btn-secondary SignUpButton">
                Sign up
              </button>
            </Link>
            <p style={{ fontSize: "1.5rem", marginTop: "10px" }} id="fdfg545ybfgf">
              Already user! Please sign in
            </p>
            <Link to="/login" className="card-link">
              <button type="button" className="btn btn-primary SignUpButton">
                Log in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;


import { Link } from "react-router-dom";
import {
  FaHome,
  FaRegClipboard,
  FaBox,
  FaSignOutAlt,
  FaCog,
} from "react-icons/fa";
import { Authentication } from "../../../FireBaseTravel/TravelConfigure";
import { signOut } from "firebase/auth";

const HeaderContains = () => {
  console.log(Authentication?.currentUser?.uid);

  const handleSignout = async () => {
    try {
      await signOut(Authentication);
      alert("Signed out");
    } catch (err) {
      alert(err);
    }
  };


  return (
    <>
      <div className="px-3 py-2 border-bottom HeaderClass" style={{ position: 'relative', height: '100px', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link to="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"></Link>

            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li className="Underline">
                <Link to="/continents" className="nav-link text-white Underline">
                  <FaHome className="bi d-block mx-auto mb-1" style={{ width: "24", height: "24", fontSize: '2rem' }} />
                  Home
                </Link>
              </li>
              <li className="Underline">
                <Link to="/dashboard" className="nav-link text-white Underline">
                  <FaRegClipboard className="bi d-block mx-auto mb-1" style={{ width: "30", height: "24", fontSize: '1.5rem' }} />
                  Dashboard
                </Link>
              </li>
              <li className="Underline">
                <Link to="/completed" className="nav-link text-white Underline">
                  <FaBox className="bi d-block mx-auto mb-1" style={{ width: "24", height: "24" }} />
                  Completed-trips
                </Link>
              </li>
              <li className="Underline">
                <Link to="/features" className="nav-link text-white Underline">
                  <FaCog className="bi d-block mx-auto mb-1" style={{ width: "24", height: "24" }} />
                  Features
                </Link>
              </li>
              <li className="Underline">
                <Link to="/" className="nav-link text-white Underline" onClick={handleSignout}>
                  <FaSignOutAlt className="bi d-block mx-auto mb-1" style={{ width: "24", height: "24" }} />
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderContains;

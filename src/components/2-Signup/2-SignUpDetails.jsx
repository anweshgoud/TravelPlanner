import { Authentication } from "../../../FireBaseTravel/TravelConfigure";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUpDetails = () => {
  const [email, setEmail] = useState("");
  const [checkemail, setCheckemail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setcheckPassword] = useState("");
  const history = useNavigate();

  const Signup = async () => {
    try {
      if (email === checkemail && password === checkPassword) {
        await createUserWithEmailAndPassword(Authentication, email, password);
        history("/continents");
      } else {
        alert('Invalid email or password');
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <main className="form-signin w-100 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              fdprocessedid="bu88r"
              onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              fdprocessedid="bu88r"
              onChange={(event) => setCheckemail(event.target.value)}
            />
            <label htmlFor="floatingInput">Re-Enter Email address</label>
            {checkemail !== "" && email !== checkemail && (
              <p
                style={{ color: "red", fontStyle: "italic", fontSize: "15px" }}
              >
                email do not match
              </p>
            )}
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              fdprocessedid="gpg7d"
              onChange={(event) => setPassword(event.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              fdprocessedid="gpg7d"
              onChange={(event) => setcheckPassword(event.target.value)}
            />
            <label htmlFor="floatingPassword">Re-Enter Password</label>
            {checkPassword !== "" && password !== checkPassword && (
              <p
                style={{ color: "red", fontStyle: "italic", fontSize: "15px" }}
              >
                password do not match
              </p>
            )}
          </div>

          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>

          <button
            className="btn btn-primary w-100 py-2"
            type="button"
            fdprocessedid="9kgpsl"
            onClick={Signup}
          >
            Sign up
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </form>
      </main>
    </>
  );
};

export default SignUpDetails;

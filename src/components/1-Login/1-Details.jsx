import { Link, useNavigate, useNavigation } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithRedirect} from "firebase/auth";
import { useState } from "react";
import { GoogleAuthProviding, Authentication } from "../../../FireBaseTravel/TravelConfigure";
import { FcGoogle } from "react-icons/fc";


const LoginPortal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Navigate=useNavigate();
  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(Authentication, email, password);
      Navigate('/continents');
      alert("Successfully signed in!");
    } catch (err) {
      alert("Invalid credentials! Please re-check email or password");
    }
  };

  return (
    <>
      <main className="form-signin w-100 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              fdprocessedid="d39y1l"
              onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              fdprocessedid="74z4xg"
              onChange={(event) => setPassword(event.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
              fdprocessedid="htjjna"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="button" onClick={signIn}>
            Sign in
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </form>
      </main>
    </>
  );
};


export default LoginPortal;


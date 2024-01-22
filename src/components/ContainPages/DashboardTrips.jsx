import { addDoc, collection} from "firebase/firestore";
import { db } from "../../../FireBaseTravel/TravelConfigure";
import { Authentication } from "../../../FireBaseTravel/TravelConfigure";
import { useState } from "react";


const DashboardTrips = ({ trips, DeleteDoc }) => {

  const tripCollections = collection(db, "Completed");
  const authenticatedUserID = Authentication?.currentUser?.uid;
  const authenticatedEmail=Authentication?.currentUser?.email;

  const [buttontext,setButtoneText]=useState('Add to Completed Trip');

  const AddToCompleted = () => {
    const authenticatedUserID = Authentication?.currentUser?.uid;

    setButtoneText((prevtext)=>(prevtext==='Add to Completed Trip'?'Added to Completed':'Add to Completed Trip'))

    try {
      addDoc(tripCollections, {
        CountryName: trips.country,
        userID: authenticatedUserID,
        email:authenticatedEmail,
      })
        .then(() => {
          alert("Succesfully added");
        })
        .catch((err) => {
          alert(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
  
  const Imageurl = trips.country + ".jpg";
  return (
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5 DashboardBorder" style={{width:'100%',height:'70%',marginLeft:'1%',marginTop:'5%'}}>
      <div className="col-10 col-sm-8 col-lg-6">
        <div
          className="d-block mx-lg-auto img-fluid"
          style={{
            backgroundImage: `url(./dist/${Imageurl})`,
            width: "300px",
            height: "300px",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
          Trip to {trips.country}
        </h1>
        <p className="lead">Date:{trips.date}</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button
            type="button"
            className="btn btn-primary btn-lg px-4 me-md-2"
            onClick={AddToCompleted}
          >
            {buttontext}
          </button>
          <button
            className="btn btn-danger btn-lg px-4"
            onClick={() => DeleteDoc(trips.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardTrips;

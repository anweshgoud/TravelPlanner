import { useRef, useState } from "react";
import SingleCity from "./Singlecity";
import { Authentication, db } from "../../../FireBaseTravel/TravelConfigure";
import { useSelector } from "react-redux";
import { addDoc, collection } from "firebase/firestore";
const Eachcity = ({ cities, continentKey, countryKey }) => {
  const todaydate = useRef(null);
  const [date, setdate] = useState("");
  const TripsCollection = collection(db, "CountryPlans");
  const citing = useSelector((store) => store[continentKey][countryKey]);
  const [buttontext1,setButtoneText1]=useState('Add to Dashboard');

  const authenticatedEmail=Authentication?.currentUser?.email;

  const Handledate = () => {
    setdate(todaydate.current.value);
  };

  const Handlebutton = () => {
    const authenticatedUserID = Authentication?.currentUser?.uid;

    setButtoneText1((prev)=>(prev==='Add to Dashboard'?'Added to Dashboard':'Add to Dashboard'))
   
    if (!authenticatedUserID) {
      alert("Authenticated user ID is undefined");
      return;
    }

    
    if (!date) {
      alert("Selected date is undefined");
      return;
    }

    try{
      addDoc(TripsCollection, {
      country: countryKey,
      trip: citing,
      userID: authenticatedUserID,
      date: date,
      email:authenticatedEmail,
    })
      .then(() => {
        alert("Succesfully added");
      })
      .catch((err) => {
        alert(err);
      });

      
    }
    catch(err){
      alert(err);
    }
  };

  return (
    <>
      <div>
        <div className="px-4 py-5 my-5 text-center">
          <h1
            className="display-5 semibold text-body-emphasis"
            style={{ fontFamily: "Prata",WebkitTextFillColor:'#383333'}}
          >
            Select Start date for the One Week trip to {countryKey}
          </h1>
          <div className="col-lg-6 mx-auto">
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <input
                type="date"
                style={{ width: "150px", color: "blue" }}
                ref={todaydate}
                onChange={Handledate}
              ></input>
            </div>

            <div>
              <button
                type="button"
                className="btn btn-primary text-center center"
                style={{ marginTop: "10px", padding: "15px",marginBottom:'0px'}}
                onClick={Handlebutton}
              >
                {buttontext1}
              </button>
            </div>
          </div>
        </div>

        <div className="hiji" style={{display:'flex',flexWrap:'wrap',marginTop:'0px',justifyContent:'space-evenly'}}>
          {cities.map((item, index) => (
            <SingleCity key={index} citing={item} date1={date}></SingleCity>
          ))}
        </div>
      </div>
    </>
  );
};

export default Eachcity;

import { useEffect, useState } from "react";
import { db } from "../../../FireBaseTravel/TravelConfigure";
import { collection, getDocs } from "firebase/firestore";
import CompletedTrips from "./CompletedTrips";
import { Authentication } from "../../../FireBaseTravel/TravelConfigure";
import Sad from "./SadAnimations";

const Completed = () => {
  const completedTrips1 = collection(db, "Completed");
  const AuthenticatedUserID = Authentication?.currentUser?.uid;

  console.log("Authenticated id is", AuthenticatedUserID);

  const [completedTrips, setCompletedTrips] = useState([]);

  const getData = async () => {
    try {
      const trips = await getDocs(completedTrips1);
      const filteredTrips = trips.docs
        .map((doc) => {
          const tripData = doc.data();
          return AuthenticatedUserID === tripData.userID
            ? { ...tripData, id: doc.id }
            : null;
        })
        .filter((trip) => trip !== null);

      setCompletedTrips(filteredTrips);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {completedTrips.length === 0 ? (
        <div className="align-items-center text-center g-5 py-5 display-5 fw-bold text-body-emphasis lh-1 mb-3" style={{WebkitTextFillColor:'#383333'}}>
          <Sad></Sad>
          No Completed trips!
        </div>
      ) : (
        completedTrips.map((item, index) => (
          <CompletedTrips key={index} trips={item}></CompletedTrips>
        ))
      )}
    </>
  );
};

export default Completed;

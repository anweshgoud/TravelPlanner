import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../FireBaseTravel/TravelConfigure";
import { useEffect, useState } from "react";
import DashboardHero from "./DashboardHero";
import { Authentication } from "../../../FireBaseTravel/TravelConfigure";
import SadAnimation from "./SadAmination";
import Loading from "./Loading";

const Dashboard = () => {
  const tripsData = collection(db, "CountryPlans");
  const [triplist, setTriplist] = useState([]);
  const AuthenticatedUserID = Authentication?.currentUser?.uid;

  const fetchData = async () => {
    try {
      const trips = await getDocs(tripsData);
      const filteredTrips = trips.docs.map((doc) => {
        const tripData = doc.data();
        if (Authentication?.currentUser?.uid === tripData.userID) {
          return {
            ...tripData,
            id: doc.id,
          };
        } else {
          return null;
        }
      });

      const finalFilteredData = filteredTrips.filter((item) => item !== null);
      setTriplist(finalFilteredData);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const DeleteDoc = async (id) => {
    try {
      const tripId = doc(db, "CountryPlans", id);
      await deleteDoc(tripId);
      setTriplist((triplist) => triplist.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  useEffect(() => {
    const fetchDataAndDelete = async () => {
      if (AuthenticatedUserID) {
        await fetchData();
      }
    };

    fetchDataAndDelete();
  }, [AuthenticatedUserID]);

  if (!AuthenticatedUserID) {
    return <div><Loading></Loading></div>;
  }

  if (triplist.length === 0 && AuthenticatedUserID) {
    return (
      <div className="align-items-center text-center g-5 py-5 display-5 fw-bold text-body-emphasis lh-1 mb-3" style={{WebkitTextFillColor:'#3B7475'}}>
        <SadAnimation></SadAnimation>
        Your Dashboard is Empty
      </div>
    );
  }

  return (
    <>
      {triplist.map((item, index) => (
        <DashboardHero key={index} trips={item} DeleteDoc={DeleteDoc}></DashboardHero>
      ))}
    </>
  );
};

export default Dashboard;

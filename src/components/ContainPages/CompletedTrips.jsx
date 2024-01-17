import TripsCompleted from "./TripsCompleted";

const CompletedTrips = ({ trips}) => {
  return (
    <>
      <div
        className="Dashboardhero"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2%",
          flexWrap:'wrap'
        }}
      >
        <div
          className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5 center"
          role="dialog"
          id="modalSheet"
          style={{ width: "50%", height: "1%",display:'flex',justifyContent:'center',alignItems:'center'}}
        >
          <TripsCompleted
            trips={trips}
          ></TripsCompleted>
        </div>
      </div>
      ;
    </>
  );
};

export default CompletedTrips;
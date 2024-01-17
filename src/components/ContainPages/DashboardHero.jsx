import DashboardTrips from "./DashboardTrips";

const DashboardHero = ({ trips, DeleteDoc }) => {
  return (
    <>
      <div
        className="Dashboardhero"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2%",
        }}
      >
        <div
          className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5 center"
          role="dialog"
          id="modalSheet"
          style={{ width: "50%", height: "15%"}}
        >
          <DashboardTrips trips={trips} DeleteDoc={DeleteDoc}></DashboardTrips>
        </div>
      </div>
      ;
    </>
  );
};

export default DashboardHero;

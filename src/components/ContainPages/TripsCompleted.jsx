const TripsCompleted = ({ trips }) => {
  const Imageurl = trips.CountryName + ".jpg";
  return (
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5 DashboardBorder" style={{width:'100%',height:'70%',marginLeft:'1%',marginTop:'5%'}}>
      <div className="col-10 col-sm-8 col-lg-6">
        <div
          className="d-block mx-lg-auto img-fluid"
          style={{
            backgroundImage: `url(${Imageurl})`,
            width: "300px",
            height: "300px",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
          Completed Trip to {trips.CountryName}
        </h1>
      </div>
    </div>
  );
};

export default TripsCompleted;

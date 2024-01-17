

const Welcome = () => {
  return (
    <div className="px-4 py-5 my-5 text-start">
      <h1
        className="display-5 fw-bold text-body-emphasis"
        style={{
          marginLeft: '30%',
          fontFamily: 'Kaushan Script', 
          fontSize: '3.3rem',
          WebkitTextFillColor:'black',
        }}
      >
        Welcome to Travel Planner
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4" style={{ marginLeft: '25%', fontFamily: 'Kaushan Script',WebkitTextFillColor:'black'}}>
          Please Select the Continent from below
        </p>
      </div>
    </div>
  );
};

export default Welcome;

import React from 'react';

const LoginBox = ({ children }) => {
  return (
    <div
      className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5 dialog2 LoginBox"
      tabIndex="-1"
      role="dialog"
      id="modalSheet"
      style={{ 
        backgroundImage: 'url(LoginTravel.jpg)',
        backgroundSize: 'cover',
      }}
    >
      <div className="modal-dialog" role="document">
        <div
          className="modal-content rounded-4 shadow"
          style={{ width: '35rem', height: '33rem', padding: '10px' }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default LoginBox;

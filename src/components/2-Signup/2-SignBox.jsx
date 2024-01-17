const SignUpBox = ({ children }) => {
  return (
    <div
      className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5 dialog"
      tabindex="-1"
      role="dialog"
      id="modalSheet"
    >
      <div className="modal-dialog" role="document">
        <div
          className="modal-content rounded-4 shadow" style={{width:'35rem',height:'33rem',padding:'10px'}}
        >{children}</div>
      </div>
    </div>
  );
};

export default SignUpBox;

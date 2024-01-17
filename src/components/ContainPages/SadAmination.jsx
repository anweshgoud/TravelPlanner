
import './SadAmination.css'


const SadAnimation = () => {
  return (
    <div className="giphy-container">
      <iframe
        src="https://giphy.com/embed/gfsQffBnuc6e096brx"
        style={{width:"400px",height:"400px"}}
        className="giphy-embed"
        alt="Sad Animation"
      ></iframe>
    </div>
  );
};

export default SadAnimation;

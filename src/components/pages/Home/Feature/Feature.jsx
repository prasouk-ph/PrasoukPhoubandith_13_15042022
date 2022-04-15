import './Feature.css';

function Feature({iconSource, featureTitle, featureContent}) {  
  return (
    <div className="feature-item">
      <img
        src={iconSource}
        alt="Chat Icon"
        className="feature-icon"
      />
      <h3 className="feature-item-title">{featureTitle}</h3>
      <p>{featureContent}</p>
    </div>
  );
}

export default Feature;
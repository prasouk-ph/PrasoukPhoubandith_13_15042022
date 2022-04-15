import './Feature.css';

function Feature({iconSource, featureTitle, featureContent}) {  
  return (
    <div class="feature-item">
      <img
        src={iconSource}
        alt="Chat Icon"
        class="feature-icon"
      />
      <h3 class="feature-item-title">{featureTitle}</h3>
      <p>
        {featureContent}
      </p>
    </div>
  );
}

export default Feature;
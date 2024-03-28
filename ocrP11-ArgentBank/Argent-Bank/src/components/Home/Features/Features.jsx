import "./Features.css"

const Features = ({ icon, title, description }) => {
  return (
    <div className="feature-item">
      {icon && <img src={icon} alt={title} className="feature-icon" />}
      <h3 className="feature-item-title">{title}</h3>
      <p>
        {description}
      </p>
    </div>
  );
}
 
export default Features;
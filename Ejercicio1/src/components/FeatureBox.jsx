const FeatureBox = ({ icon, title, description }) => {
    return (
        <div className="feature-box">
            <div className="feature-icon">
                <img src={icon} alt={title} />
            </div>
            <h5 className="feature-title">{title}</h5>
            <p className="feature-description">{description}</p>
        </div>
    );
};

export default FeatureBox;

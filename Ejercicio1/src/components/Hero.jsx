const Hero = ({ title, subtitle, backgroundImage }) => {
    return (
        <div
            className="hero-section"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="hero-overlay">
                <h1 className="hero-title">{title}</h1>
                <p className="hero-subtitle">{subtitle}</p>
            </div>
        </div>
    );
};

export default Hero;

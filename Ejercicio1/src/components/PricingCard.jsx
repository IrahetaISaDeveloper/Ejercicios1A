const PricingCard = ({ title, price, features, highlighted = false }) => {
    return (
        <div className={`pricing-card ${highlighted ? 'highlighted' : ''}`}>
            <h5 className="pricing-title">{title}</h5>
            <h2 className="pricing-price">${price}</h2>
            <ul className="pricing-features list-unstyled">
                {features.map((feature, index) => (
                    <li key={index} className="pricing-feature">
                        ✓ {feature}
                    </li>
                ))}
            </ul>
            <button className="btn btn-primary w-100">Seleccionar</button>
        </div>
    );
};

export default PricingCard;

const Badge = ({ text, variant = 'primary' }) => {
    return (
        <span className={`badge bg-${variant}`}>
            {text}
        </span>
    );
};

export default Badge;
